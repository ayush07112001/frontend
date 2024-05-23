const marksClc = (callback) => {
    const result = callback();
    console.log("this is result array", result);

    let totalMarks = 0;
    for (let i = 0; i < result.length; i++) {
        for (let key in result[i]) {
            totalMarks += result[i][key];
        }
    }
    return totalMarks / result.length;
};

const subjects = () => {
    const arr = [
        { cpp: 50 },
        { java: 60 },
        { php: 70 },
        { js: 95 },
        { react: 100 }
    ];
    return arr;
};

console.log(marksClc(subjects));
