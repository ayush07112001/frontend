const person={
    name:"john",
    age:30,
    greet:function(){
        // console.log(`hello,my name is ${this.name} and im ${this.age}years old`)
        console.log(this)
    }
};
person.greet();