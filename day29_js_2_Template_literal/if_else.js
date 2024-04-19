//&& ==>and  || ==> or
const adharCard = true;
const panCard = true;
const age = 20;

// nested if else....
if(panCard && adharCard){
    console.log("you can open account in our bank");
    if(age>=18){
        console.log("you are eligible for car insurance")
    }
    else{
        console.log("your age should be greater than 18 to claim car insurance")
    }
}
else{
    console.log("you can not open account in our bank");
}