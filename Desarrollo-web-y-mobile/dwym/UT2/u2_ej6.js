function convertToCelsius(temp){
    tempF = (temp -32)/1.8;
    //console.log(tempF);
    console.log(Math.round(tempF * 10)/10);
}
function convertToFahrenheit(temp){
    tempF = (temp * (9/5))+ 32;
    //console.log(tempF);
    console.log(Math.round(tempF * 10)/10);
}

convertToCelsius(100)
convertToFahrenheit(37.8)

//(grados celsius * 9/5) + 32;