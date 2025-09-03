
document.addEventListener("DOMContentLoaded", () => {
  const parrafo = document.querySelector("p");
  const boton = document.getElementById("button1");
  boton.addEventListener("click", () => {
    parrafo.textContent = "Texto cambiado";
  });
});
