// console.log("callback function")

const print=(content,callback)=>{
    console.log(content)
    const result=callback();
    console.log(result)
}

// const print2=()=>console.log("spiderman is belong from Marvel")
const sbiROI=()=>7.9
const pnbROI=()=>6.9
// print("superman is belong from DC",pnbROI)


const marksClc=(callback)=>{
    const result=callback();
    console.log("this is result array",result)

    let totalMarks=0;
     let count=0;
    for(let key in result){
        totalMarks+=result[key]
        count++;
    }
    return  totalMarks/count;

}

const subjects=()=>{
    const arr={
        cpp:50,
        java:60,
        php:70,
        js:95,
        react:100
    };
    return arr;
};
console.log(marksClc(subjects))

