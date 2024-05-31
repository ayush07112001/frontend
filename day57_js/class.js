class car{
    constructor(make,model,price){
        this.make=make;
        this.model=model;
        this.price=price;
    }
    displayinfo=()=>{
        console.log(`car:${this.make}${this.model}${this.price}`);
    }
}
const myCar=new car("toyota","corolla","20lacs");
myCar.displayinfo();