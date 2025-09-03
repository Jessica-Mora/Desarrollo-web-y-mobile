
document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("idLista");
  const input = document.getElementById("input");
  const boton = document.getElementById("button1");
  const boton2 = document.getElementById("button2");

  boton.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = input.value;
    lista.appendChild(li);
    input.value = "";
  });

   boton2.addEventListener("click", () => {
    lista.removeChild(lista.lastChild);
  });


});

