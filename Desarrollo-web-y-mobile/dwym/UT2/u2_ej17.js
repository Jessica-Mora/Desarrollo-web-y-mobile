
document.addEventListener("DOMContentLoaded", () => {
  var parrafo = document.querySelector("p");
  const boton = document.getElementById("button1");

  boton.addEventListener("click", () => {
    
   let valor = Number(parrafo.textContent);
    valor = valor + 1;

    parrafo.textContent = valor;
    
  });



});

/* 
este codigo obtine el valor de p y lo transforma a un
entero que pueda usarse para incrementar el contador
y despues vuelve a asignarle el varlor de al parrafo
<p>  
  
 */