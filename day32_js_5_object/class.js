const car = {
    brandName: 'BMW',
    headlights: 2,
    wheels: 4,
    engineType: 'petrol',
};

const rangeRover = {
    ...car,
    brandName:'rangeRover',
    carName: 'Defender',
    price: 12000000,
};

const audi = {
    ...car,
    brandName:'audi',
    price: 5986000,
    available: 'Audi Showroom',
};

console.log("This is Range Rover:", rangeRover);
console.log("This is Audi car:", audi);
