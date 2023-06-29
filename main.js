document.addEventListener("DOMContentLoaded", () => {
  const btnDownload = document.querySelector(".btn-1");
  btnDownload.addEventListener("click", () => {
    alert("¡Descarga iniciada!");
  });

  const paragraphs = document.querySelectorAll("section p");
  const numParagraphs = paragraphs.length;
  let currentParagraph = 0;

  const contenidoTexto =
    "Con más de 25 años de experiencia en el campo de la reparación de computadoras, he tenido el privilegio de presenciar y adaptarme a la evolución constante de la tecnología. A lo largo de mi carrera, he adquirido un profundo conocimiento de los componentes internos de los ordenadores, así como de los sistemas operativos más utilizados. Desde los primeros días de los equipos de escritorio hasta la actualidad de las laptops ultradelgadas y los dispositivos móviles, he enfrentado y resuelto una amplia gama de problemas técnicos. Mi experiencia en reparación de computadoras me ha permitido diagnosticar y solucionar con eficacia problemas de hardware y software.";

  const contactoTexto =
    "Tengo conocimiento en diseño, implementación y mantenimiento de redes empresariales. Amplio conocimiento de los principios y protocolos de redes, así como de las tecnologías y equipos de red más utilizados. Capacidad demostrada para solucionar problemas complejos de conectividad y optimizar el rendimiento de las redes.";

  const experienciaTexto =
    "Creé Emci Computación, s.r.l como servicio Técnico de Computación donde se realiza ensamblaje, repotenciación y mantenimiento de computadoras. Además, estudié electrónica de computadoras con sólida experiencia en el diagnóstico, reparación y mantenimiento de componentes y sistemas electrónicos computacionales. Tengo conocimiento de los principios y teorías de la electrónica, así como de las herramientas y equipos de prueba utilizados en la industria.";

  const menuLinks = document.querySelectorAll(".menu-link");
  menuLinks.forEach((link, index) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      currentParagraph = index;
      displayParagraph(currentParagraph);
    });
  });

  function displayParagraph(index) {
    paragraphs.forEach((paragraph, i) => {
      paragraph.style.display = i === index ? "block" : "none";
    });
  }

  displayParagraph(currentParagraph);

  const btnNext = document.getElementById("btn-next");
  const btnPrevious = document.getElementById("btn-previous");

  btnNext.addEventListener("click", () => {
    currentParagraph = (currentParagraph + 1) % numParagraphs;
    displayParagraph(currentParagraph);
  });

  btnPrevious.addEventListener("click", () => {
    currentParagraph = (currentParagraph - 1 + numParagraphs) % numParagraphs;
    displayParagraph(currentParagraph);
  });
});
