

document.addEventListener("DOMContentLoaded", () => {
  
    const mostrarInfo = document.getElementById("mostrarInfo");

    //###################################################

     Promise.all([
    fetch("http://localhost:3000/albums").then(res => res.json()),
    fetch("http://localhost:3000/songs").then(res => res.json())
  ])
    .then (([albums, songs]) =>{
        //console.log(data)

        albums.forEach(album => {
            const li = document.createElement("li");
            
            //---
            let listaCanciones = [];
            songs.forEach(song =>{
                if (album.songIds.includes(Number(song.id))){
                    //listaCanciones.push(song.name)
                    listaCanciones.push(`<a href="#" class="cancion">${song.name}</a>`);
                    console.log(listaCanciones);
                }
            });

            //------------esto esta bien---------
            li.innerHTML = ( `<b>Album:</b> ${album.name}.<b> Artista: </b> ${album.artist}. <b> 
                Cantidad de canciones: </b> ${album.trackCount}.<br> <b> Lista de generos:</b> ${album.genreList}  .
                <b>Año de lanzamiento:</b> ${album.year}. <b>Lista de canciones: </b> ${listaCanciones.join(", ")}`);

            mostrarInfo.appendChild(li);
            
            //##########lo de arriba funciona ##################

            
       
        });
        
        
    })
   

});

/*
li.querySelectorAll(".cancion").forEach(link => {
            link.addEventListener("click", () => {
            alert(`Elegiste la canción: ${link.textContent}`);
            });
});

*/



/*  esto funciona

fetch(`http://localhost:3000/songs`)
    .then (response => response.json())
    .then (data =>{
        //console.log(data)

        data.forEach(element => {
            const li = document.createElement("li");
            //li.textContent = element.name;

            li.textContent = ( `${element.name}, Artista: ${element.artist} `);

            mostrarInfo.appendChild(li);
            //mostrarInfo.innerHTML = ( `<li>${element.name} </li>`);
         
        });
        
    })

      
*/



//const pais = "https://restcountries.com/${pais}"