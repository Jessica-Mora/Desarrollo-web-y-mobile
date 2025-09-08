
document.addEventListener("DOMContentLoaded", () => {
  
    const buton = document.getElementById("button0")
    const paisBuscado = document.getElementById("paisBuscado")
    const mostrarInfo = document.getElementById("mostrarInfo")

    buton.addEventListener("click", async() =>{

      let pais = paisBuscado.value;
      let url = `https://restcountries.com/v3.1/name/${pais}`;
      console.log("funciono");
        

      //fetch(url)
      const response = await fetch(url);
      const data = await response.json();


      let nombre = data[0].name.common;
      let capital = data[0].capital[0];
      let poblacion = data[0].population;
      let region = data[0].region;
      let bandera = data[0].flags.png;

      
      mostrarInfo.innerHTML = ( `<li>${nombre} ${capital} ${poblacion} ${region} 
       <br> <img src= "${bandera}"> </li>`);

             


    }) 


});

//const pais = "https://restcountries.com/${pais}"