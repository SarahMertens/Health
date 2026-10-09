import { flushPromises, mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createMemoryHistory, createRouter } from 'vue-router';
import App from '@/App.vue';
import { STORAGE_KEY } from '@/composables/useShoppingList';
import { router as appRouter } from '@/router';

/** Mounts the whole app at a URL, with the real routes but in-memory history. */
async function mountAt(path: string) {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: appRouter.options.routes,
  });

  router.push(path);
  await router.isReady();

  const wrapper = mount(App, { global: { plugins: [router] } });
  await flushPromises();

  return { wrapper, router };
}

describe('pages', () => {
  it('redirects the start page to the schedule', async () => {
    const { wrapper, router } = await mountAt('/');

    expect(router.currentRoute.value.name).toBe('schedule');
    expect(wrapper.text()).toContain('Vast weekoverzicht');
    expect(wrapper.findAll('.day-card')).toHaveLength(7);
  });

  it('marks the active tab, also on a detail page', async () => {
    const { wrapper } = await mountAt('/recepten/kip-rijst');

    const active = wrapper.findAll('[aria-current="page"]');
    expect(active).toHaveLength(1);
    expect(active[0]!.text()).toContain('Recepten');
  });

  it('shows a workout with its steps', async () => {
    const { wrapper } = await mountAt('/schema/kracht-a');

    expect(wrapper.find('h2').text()).toContain('Kracht A');
    expect(wrapper.findAll('.step')).toHaveLength(7);
    // **bold** markers are rendered as elements, not shown literally.
    expect(wrapper.text()).not.toContain('**');
    expect(wrapper.find('.step strong').text()).toBe('Leg Press machine');
  });

  it('shows a recipe with an ingredient list', async () => {
    const { wrapper } = await mountAt('/recepten/shake-aardbei-skyr');

    expect(wrapper.text()).toContain('Aardbei-skyr shake');
    expect(wrapper.findAll('li').map((li) => li.text())).toEqual([
      '200 ml halfvolle melk',
      '30 g whey',
      '100 g skyr',
      '100 g aardbeien',
    ]);
  });

  it('highlights today in the week menu', async () => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date('2026-10-07T12:00:00')); // a Wednesday

    const { wrapper } = await mountAt('/recepten');

    expect(wrapper.find('[data-testid="menu-today"]').text()).toContain('Wo');
    vi.useRealTimers();
  });

  it.each(['/schema/does-not-exist', '/recepten/does-not-exist', '/somewhere-else'])(
    'shows "not found" for %s',
    async (path) => {
      const { wrapper } = await mountAt(path);

      expect(wrapper.text()).toContain('Pagina niet gevonden');
    },
  );
});

describe('shopping page', () => {
  beforeEach(() => {
    localStorage.clear();
    // Each test gets a fresh list instead of the app-wide shared one.
    vi.resetModules();
  });

  async function mountShopping() {
    const { default: ShoppingView } = await import('@/views/ShoppingView.vue');
    return mount(ShoppingView);
  }

  it('ticks an item, updates the counter and saves it', async () => {
    const wrapper = await mountShopping();
    expect(wrapper.find('[data-testid="progress-kot"]').text()).toContain('0 / 20');

    await wrapper.find('[data-testid="item-kot-kip"]').setValue(true);

    expect(wrapper.find('[data-testid="progress-kot"]').text()).toContain('1 / 20');
    expect(wrapper.find('[data-testid="progress-thuis"]').text()).toContain('0 / 11');
    expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!)['kot-kip']).toBe(true);
  });

  it('shows ticks that were saved earlier', async () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ 'thuis-kip': true }));

    const wrapper = await mountShopping();

    const checkbox = wrapper.find<HTMLInputElement>('[data-testid="item-thuis-kip"]');
    expect(checkbox.element.checked).toBe(true);
  });

  it('starts a new week: weekly items are unticked, stock stays', async () => {
    const wrapper = await mountShopping();
    await wrapper.find('[data-testid="item-kot-kip"]').setValue(true); // weekly
    await wrapper.find('[data-testid="item-kot-rijst"]').setValue(true); // stock

    await wrapper.find('[data-testid="new-week"]').trigger('click');

    const checked = (id: string) =>
      wrapper.find<HTMLInputElement>(`[data-testid="item-${id}"]`).element.checked;
    expect(checked('kot-kip')).toBe(false);
    expect(checked('kot-rijst')).toBe(true);
    expect(wrapper.find('[data-testid="save-message"]').text()).toContain(
      'Nieuwe week gestart',
    );
  });

  it('puts the normal message back after a few seconds', async () => {
    vi.useFakeTimers();
    const wrapper = await mountShopping();

    await wrapper.find('[data-testid="new-week"]').trigger('click');
    vi.advanceTimersByTime(3000);
    await wrapper.vm.$nextTick();

    expect(wrapper.find('[data-testid="save-message"]').text()).toContain(
      'automatisch bewaard',
    );
    vi.useRealTimers();
  });
});
