function reverseString(texto){
    let i = texto.length;
    let resultado="";
    while(i !=0){
        resultado+=texto[i-1]
        i-=1;
    }
    console.log(resultado);
}
reverseString("hola")