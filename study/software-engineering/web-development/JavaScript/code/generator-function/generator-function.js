function* generatorExample() {
    console.log('asd')
    yield 8;
    yield 9;
    yield 10;
}

const generator = generatorExample();

// console.log(generator.next());

function* createUniqueRandomGenerator(array) {
    const available = array;

    while (available.length !== 0){
        const randomIndex = Math.floor(Math.random() * available.length);
        const value = available[randomIndex];

        // Remove the used value from the list of available values
        available.splice(randomIndex, 1);
        
        yield value;
    }

}

const names = ["Dom", "Shelly", "Timmy", "Marie"];
const uniqueNames = createUniqueRandomGenerator(names);

for (const name of uniqueNames) {
    console.log(name);
}