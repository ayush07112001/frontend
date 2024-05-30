const mysalary = (inHand, callback) => {
    const deductions = callback();
    let totalDeductions = 0;

    for (let key in deductions) {
        
        totalDeductions += (inHand * deductions[key]) / 100;
    }

    return inHand - totalDeductions;
};

const taxes = () => {
    const deductions = {
        GST: 5.5,
        ITR: 2.3,
        homeloan: 8.9,
        eduloan: 9.2,
        iphoneloan: 10.2,
    };
    return deductions;
};

const netSalary = mysalary(50000, taxes);
console.log("Net Salary:", netSalary);
