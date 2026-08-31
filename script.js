const tabs = document.querySelectorAll('.tab');
const frame = document.getElementById('content-frame');

function setActiveTab(clickedTab) {
  tabs.forEach(tab => tab.classList.remove('active'));
  clickedTab.classList.add('active');
}

// Zet de hoogte van de iframe gelijk aan de echte inhoud,
// zodat er nooit een aparte scrollbalk binnen de iframe ontstaat.
function resizeFrame() {
  try {
    const doc = frame.contentDocument || frame.contentWindow.document;
    if (!doc || !doc.documentElement) return;

    const height = Math.max(
      doc.documentElement.scrollHeight,
      doc.body ? doc.body.scrollHeight : 0
    );

    // Alleen aanpassen bij een echt verschil, dat voorkomt
    // onnodige reflow-lussen die de pagina steeds langer maken.
    if (Math.abs(parseInt(frame.style.height, 10) - height) > 2) {
      frame.style.height = height + 'px';
    }
  } catch (error) {
    // Cross-origin of nog niet geladen: veilige vaste hoogte.
    frame.style.height = '620px';
  }
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

frame.addEventListener('load', () => {
  resizeFrame();

  try {
    const doc = frame.contentDocument || frame.contentWindow.document;

    // Als er binnen schema/recepten geklikt wordt (bv. checkboxes),
    // opnieuw meten voor het geval de inhoud van hoogte verandert.
    doc.addEventListener('click', () => {
      setTimeout(resizeFrame, 60);
      setTimeout(resizeFrame, 250);
    });

    if ('ResizeObserver' in window && doc.body) {
      const observer = new ResizeObserver(() => resizeFrame());
      observer.observe(doc.body);
    }
  } catch (error) {
    // Niets doen, de vaste fallbackhoogte blijft bruikbaar.
  }
});
