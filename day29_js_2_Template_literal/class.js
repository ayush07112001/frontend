const maths=90;
const chemistary=90;
const physics=90;
const english=95;
const computer=90;
const level1=true;
const level2=true;
const level3=true;

const result=(maths+chemistary+physics+english+computer)/5;

// nested if else....
if(result>=80){
    console.log("eligible for olympic");
    if(level1&&level2&&level3){
        console.log("winnner");
    }
    else{
        console.log("losser");
    }
}
else{
    console.log("not eligible")
}