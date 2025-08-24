/*
function generatePassword(length){
    let i = 0;
    let resultado = "";
    if (length >= 8){
        while(i !=length){
        let num = Math.floor(Math.random() * 10);
        resultado = resultado + num.toString();

        i++;
    }
    }
    
    return(resultado);
}

console.log(generatePassword(8))

*/

function generatePassword(length){


    let i = 0;

    const symbols = "!@#$%^&*()-_=+[]{};:,.<>/?|~";
    const number = "0123456789";
    const upperCaracter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaracter = "abcdefghijklmnopqrstuvwxyz";

    let resultado = "";
    if (length >= 8){
        while(i !=length){
        let num = Math.floor(Math.random() * 10);
        let act = symbols[num];
        
        resultado = resultado + act;

        //resultado = resultado + num.toString();

        i++;
    }
    }
    
    return(resultado);
}

console.log(generatePassword(8))


