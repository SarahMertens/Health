const tabs = document.querySelectorAll('.tab');
const container = document.getElementById('content-container');
let currentPage = 'schema/index.html';

function setActiveTabByPage(page) {
  tabs.forEach(tab => {
    const tabPage = tab.dataset.page || '';
    const active = page.includes('/schema/') || page.endsWith('schema/index.html')
      ? tabPage === 'schema/index.html'
      : page.includes('/recepten/') || page.endsWith('recepten/index.html')
        ? tabPage === 'recepten/index.html'
        : page.includes('/boodschappen/') || page.endsWith('boodschappen/index.html')
          ? tabPage === 'boodschappen/index.html'
          : false;
    tab.classList.toggle('active', active);
  });
}

async function loadPage(page, scrollToTabs = false) {
  try {
    const response = await fetch(page, { cache: 'no-store' });
    if (!response.ok) throw new Error(`Kon ${page} niet laden`);

    const html = await response.text();
    const parsed = new DOMParser().parseFromString(html, 'text/html');
    const source = parsed.querySelector('.content') || parsed.body;

    container.innerHTML = source.innerHTML;
    currentPage = new URL(page, window.location.href).href;
    setActiveTabByPage(currentPage);
    bindLoadedLinks();

    if (scrollToTabs) {
      document.querySelector('.tabs').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  } catch (error) {
    container.innerHTML = `
      <div class="content">
        <div class="card">
          <div class="card-title">Pagina kon niet geladen worden</div>
          <p>Open deze website via je webserver/GitHub Pages. De inhoud wordt nu zonder iframe geladen zodat de pagina niet meer oneindig kan groeien.</p>
        </div>
      </div>`;
    console.error(error);
  }
}

function bindLoadedLinks() {
  container.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;

    const target = new URL(href, currentPage);
    if (target.origin !== window.location.origin) return;

    link.addEventListener('click', event => {
      event.preventDefault();
      loadPage(target.href, true);
    });
  });
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const page = tab.dataset.page;
    if (page) loadPage(page, true);
  });
});

loadPage(currentPage, false);
