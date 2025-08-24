const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]


function finTheOldest(people){
    let oldest = 0;
    let oldestName = "";
    for (p of people){
        let pYears = p.yearOfDeath - p.yearOfBirth
        if (pYears > oldest){
            oldest = pYears;
            oldestName = p.name;
        }
    }
    return (oldestName)
}

console.log(finTheOldest(people));