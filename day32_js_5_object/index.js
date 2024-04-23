const person1={
    name:'superman',
    gmail:'superman@gmail.com',
    age:350,
    salary:5,
    panCard:'OWERTYUIO!@#$%^',
    pinCode:496440
}
const person2={...person1,
    name:'batman',
    gmail:'batman@gmail.com',
    phoneNumber:8839040856}
const{name,age,phoneNumber,salary}=person2
console.log("this is person2 object ",age,phoneNumber,salary)