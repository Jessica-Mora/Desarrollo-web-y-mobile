
document.addEventListener("DOMContentLoaded", () => {
  const parrafo = document.querySelector("p");
  const boton = document.getElementById("button1");

  boton.addEventListener("click", () => {
    
   if (parrafo.style.visibility === "visible"){
    parrafo.style.visibility = "hidden";
   }else parrafo.style.visibility = "visible";;
    
  });



});

//parrafo.style.visibility = "visible";

//  boton.addEventListener("click", () => {
    
//    parrafo.style.visibility = "hidden";

//  });




