let nums = [1, 2, 3, 4, 5, 6, 7]

function getSum(nums){
    return nums.reduce((acumuladorSum, num) => acumuladorSum + num, 0) ;
    
}

console.log(getSum(nums))

/*  primero defino donde se va acumular la sumatoria: acumuladorSum
num, representa el elemento dentro de la lista nums
acumuladorSum + num representas el valor de la sumatoria
0 define que el acumulador empieza en 0      */