const pound = 103.80;
const dollar = 83.47;
const yen = 0.54;
const euro = 88.89;
const dinar = 272.79;
function convertUnits(amount, conversionType) {
    switch (conversionType) {
        case 1:
            return amount * 1000;
        case 2:
            return amount * 1000;
        case 3:
            return (amount * 9 / 5) + 32;
        case 4:
            return amount * dinar;
        case 5:
            return amount * yen;
        case 6:
            return amount * euro;
        default:
            return "Invalid conversion choice.";
    }
}
function calculator(operation, num1, num2) {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Cannot divide by zero";
            }
        default:
            return "Invalid operation";
    }
}
function ageCalculator(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}
function cylinderCalculator(radius, height) {
    const area = Math.PI * radius * radius;
    const surfaceArea = (2*Math.PI*radius*radius) + (2*Math.PI*radius*height);
    return { area, surfaceArea };
}
function simpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}
function compoundInterest(principal, rate, time) {
    return principal * ((1 + rate / 100) ** time - 1);
}

function main() {
    const choice = parseInt(prompt("Enter your choice: \n1. Currency Converter\n2. Calculator\n3. Age Calculator\n4. Cylinder Calculator\n5. Simple Interest\n6. Compound Interest"));
    switch (choice) {
        case 1: {
            let userValue = parseFloat(prompt("Enter value: "));
            let convert = parseInt(prompt("Km to Meter Enter 1\nkilogram to gram enter 2\n degree to farenheit enter 3\ndollar to dinar Enter 4\nyen to INR Enter 5\npound to euro enter 6"));
            let result = convertUnits(userValue, convert);
            switch (convert) {
                case 1:
                    console.log(`${userValue} km = ${result} meter`);
                    break;
                case 2:
                    console.log(`${userValue} kg = ${result} gram`);
                    break;
                case 3:
                    console.log(`${userValue} degree = ${result} Fahrenheit`);
                    break;
                case 4:
                    console.log(`${userValue} dollar = ${result} dinar`);
                    break;
                case 5:
                    console.log(`${userValue} yen = ${result} INR`);
                    break;
                case 6:
                    console.log(`${userValue} pound = ${result} euro`);
                    break;
                default:
                    console.log(result);
            }
            break;
        }
        case 2: {
            const operation = prompt("Enter the operation (+, -, *, /):");
            const num1 = parseFloat(prompt("Enter first number:"));
            const num2 = parseFloat(prompt("Enter second number:"));
            console.log(calculator(operation, num1, num2));
            break;
        }
        case 3: {
            const birthYear = parseInt(prompt("Enter your birth year:"));
            console.log(ageCalculator(birthYear));
            break;
        }
        case 4: {
            const radius = parseFloat(prompt("Enter the radius of the cylinder:"));
            const height = parseFloat(prompt("Enter the height of the cylinder:"));
            console.log(cylinderCalculator(radius, height));
            break;
        }
        case 5: {
            const p = parseFloat(prompt("Enter principal amount:"));
            const r = parseFloat(prompt("Enter rate of interest:"));
            const t = parseFloat(prompt("Enter time in years:"));
            console.log(simpleInterest(p, r, t));
            break;
        }
        case 6: {
            const principal = parseFloat(prompt("Enter principal amount:"));
            const rate = parseFloat(prompt("Enter rate of interest:"));
            const time = parseFloat(prompt("Enter time in years:"));
            console.log(compoundInterest(principal, rate, time));
            break;
        }
        default: {
            console.log("Invalid choice");
        }
    }
}
main(); 



