const pound = 103.80;
const dollar = 83.47;
const yen = 0.54;
const euro = 88.89;
const dinnar = 272.79;

let userValue = parseFloat(prompt("Enter value: "));
let convert = parseInt(prompt("Yen to INR Enter .1\nPound to Euro Enter .2\nKm to Meter Enter .3\nKilogram to Gram Enter .4\nDegree to Fahrenheit Enter .5\nDollar to Dinnar Enter .6"));

let result;

switch (convert) {
    case 1: {
        console.log("...Yen to INR");
        result = userValue / yen;
        console.log(`${userValue} yen = ${result} INR`);
        break;
    }
    case 2: {
        console.log("...Pound to Euro");
        result = userValue * (euro / pound);
        console.log(`${userValue} pound = ${result} euro`);
        break;
    }
    case 3: {
        console.log("...Km to Meter");
        result = userValue * 1000;
        console.log(`${userValue} km = ${result} meter`);
        break;
    }
    case 4: {
        console.log("...Kilogram to Gram");
        result = userValue * 1000;
        console.log(`${userValue} kg = ${result} gram`);
        break;
    }
    case 5: {
        console.log("...Degree to Fahrenheit");
        result = (userValue * 9 / 5) + 32;
        console.log(`${userValue} degree = ${result} Fahrenheit`);
        break;
    }
    case 6: {
        console.log("...Dollar to Dinnar");
        result = userValue * (dinnar / dollar);
        console.log(`${userValue} dollar = ${result} dinnar`);
        break;
    }
    default: {
        console.log("Invalid conversion choice.");
    }
}
