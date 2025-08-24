let nums = [1, 2, 2, 3, 4, 4, 4, 5]

function duplicate(nums){
    let listNueva = [];
    for (n of nums){
        if (!(n in listNueva)){
            listNueva.push(n);
        }
    }
    return (listNueva);
}
console.log(duplicate(nums));