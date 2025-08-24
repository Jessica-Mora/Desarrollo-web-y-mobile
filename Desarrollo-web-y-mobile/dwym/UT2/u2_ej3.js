function removeFromArray(array, item){
    //array = array.filter()
      if (array.includes(item)){
        array = array.filter(elemento => elemento !== item);
    }
    console.log(array);
}
removeFromArray([1,2,3,4], 3)


/*  elemento => elemento !== item es ingual que escribir:
function(elemento) {
    return elemento !== item;
}
esto devuelve un array nuevo con todos los elementos que cumplan la condicion, 
en este caso, que sean diferentes a item    */