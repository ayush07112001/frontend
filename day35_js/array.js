const arr= [1, 2, 3, 4, 5, 6, 7,8];
let arr2=[];
let arr3=[];
let mid=arr.length/2;
for(let i=0;i<arr.length;i++)
{
    if(i<mid){
        arr2.push(arr[i])
    }
    else{
        arr3.push(arr[i])
    }
}
console.log(arr2);
console.log(arr3);