const turtle = {
    name: "alan",
    legs: 4,
    shell: true,
    meal: 10,
    diet: "berries"
}

/** BAD CODE **/

function feed(animal) {
    return `Feed ${animal.name} ${animal.meal} ${animal.diet}`;
}


/** GOOD CODE **/

function feedRight({name, meal, diet}) {
    return `Feed ${name} ${meal} kilos of ${diet}`;
}



/** OR **/

function feedOR(animal) {
    const { name, meal, diet } = animal;

    return `Feed ${name} ${meal} ${diet}`;
}
