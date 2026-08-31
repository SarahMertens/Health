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

  // Eerst resetten zodat de nieuwe pagina
  // geen oude iframehoogte overneemt
  frame.style.height = '0px';

  frame.src = page;

  window.scrollTo({
    top: document.querySelector('.tabs').offsetTop - 10,
    behavior: 'smooth'
  });
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    openMainSection(tab);
  });
});


function resizeFrame() {
  try {
    const doc =
      frame.contentDocument ||
      frame.contentWindow.document;

    if (!doc.body) return;

    // Eerst de hoogte resetten
    frame.style.height = '0px';

    // Alleen de echte body-inhoud meten
    const height = doc.body.offsetHeight;

    frame.style.height = `${height}px`;

  } catch (error) {
    frame.style.height = '900px';
  }
}


frame.addEventListener('load', () => {

  resizeFrame();

  try {
    const doc =
      frame.contentDocument ||
      frame.contentWindow.document;

    // Na klikken binnen schema/recepten
    // opnieuw de correcte hoogte meten
    doc.addEventListener('click', () => {
      setTimeout(resizeFrame, 50);
      setTimeout(resizeFrame, 200);
    });

  } catch (error) {
    // niets doen
  }

});