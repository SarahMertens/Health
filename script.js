const tabs = document.querySelectorAll('.tab');
const frame = document.getElementById('content-frame');

function setActiveTab(clickedTab) {
  tabs.forEach(tab => tab.classList.remove('active'));
  clickedTab.classList.add('active');
}

function openMainSection(tab) {
  const page = tab.dataset.page;
  if (!page) return;

  setActiveTab(tab);
  frame.src = page;

  window.scrollTo({
    top: document.querySelector('.tabs').offsetTop - 10,
    behavior: 'smooth'
  });
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => openMainSection(tab));
});
