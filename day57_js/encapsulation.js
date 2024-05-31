class Counter {
    constructor() {
        let count = 0;
        this.increment = () => {
            count++;
            console.log(count);
        };
        this.decrement = () => {
            count--;
            console.log(count);
        };
    }
}

const counter1 = new Counter();
counter1.increment();
counter1.increment(); 
counter1.decrement(); 
