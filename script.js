document.addEventListener("DOMContentLoaded", () => {
    const btnComenzar = document.getElementById("btn-comenzar");
    const formulario = document.getElementById("form-guia");
    const mensaje = document.getElementById("mensaje-formulario");
  
    btnComenzar.addEventListener("click", () => {
      window.scrollTo({
        top: formulario.offsetTop,
        behavior: "smooth"
      });
    });
  
    formulario.addEventListener("submit", function(e) {
      e.preventDefault();
      mensaje.style.display = "block";
      formulario.reset();
    });
  });
  