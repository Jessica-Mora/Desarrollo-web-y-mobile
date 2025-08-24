function lapYear(year){
    return (year%400 ==0 && year%100 ==0 || year %4 ==0);
    
}
console.log(lapYear(2020))
console.log(lapYear(2021))