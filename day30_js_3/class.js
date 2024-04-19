
const pound=103.80;
const dollar=83.47;
const yen=.54;
const euro=88.89;
const dinnar=272.79;
let userINR=parseInt(prompt("enter INR"));
let convert=parseInt(prompt("INT TO Pound Enter .1 \n INR To Dollar Enter .2 \n INT To Yen Enter .3 \n Euro to INR Enter .4 \n Dinnar to INR Enter .5"));
let result;
switch(convert){
    case 1:{
        console.log("...INR to pound")
        result=userINR/pound
        console.log(`${userINR} in pound = ${result} pound`);
    }
    break;
    case 2:{
        console.log("...INR to Dollar")
        result=userINR/dollar
        console.log(`${userINR} in us dollar = ${result} dollar`);
    }
    break;
    case 3:{
        console.log("...INR to yen")
        result=userINR/yen
        console.log(`${userINR} in yen = ${result} yen`);
    }
    break;
    case 4:{
        console.log("...Euro to INR")
        result=userINR*euro;
        console.log(`${userINR} in euro = ${result} rupee`);
    }
    break;
    case 5:{
        console.log("...Dinnar to INR")
        result=userINR*dinnar;
        console.log(`${userINR} in dinnar= ${result} rupee`);
    }
    break;
    default:console.log("invalid currency");
}