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
  window.scrollTo({ top: document.querySelector('.tabs').offsetTop - 10, behavior: 'smooth' });
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => openMainSection(tab));
});

function resizeFrame() {
  try {
    const doc = frame.contentDocument || frame.contentWindow.document;
    const height = Math.max(
      doc.body ? doc.body.scrollHeight : 0,
      doc.documentElement ? doc.documentElement.scrollHeight : 0
    );

    if (height > 0) {
      frame.style.height = `${height + 8}px`;
    }
  } catch (error) {
    frame.style.height = '1200px';
  }
}

frame.addEventListener('load', () => {
  resizeFrame();

  try {
    const doc = frame.contentDocument || frame.contentWindow.document;

    // Blijf op de hoofdwebsite, ook wanneer je binnen schema/recepten klikt.
    doc.addEventListener('click', () => {
      setTimeout(resizeFrame, 60);
      setTimeout(resizeFrame, 250);
    });

    if ('ResizeObserver' in window && doc.body) {
      const observer = new ResizeObserver(resizeFrame);
      observer.observe(doc.body);
    }
  } catch (error) {
    // De inhoud blijft bruikbaar met de vaste fallbackhoogte.
  }
});
