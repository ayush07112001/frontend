// const Marvel={
//     Movie:'Infinity War',
//     release:2018,
//     Hero:'IronMan',
//     Location:'NYC US',
//     star:'5 stars'

// }
// for(let key in Marvel){
//     console.log(`${key}: ${Marvel[key]}`);
// }

let arr=[10,20,"superman","spiderman",20.342,true,false]
// for(let i=0;i<=arr.length;i++){
//     console.log(arr[i])
// }
// let i=0;
// while(i<=arr.length){
//     console.log(arr[i]);
//     i++;
// }
// for(let element of arr){
//     console.log(element)
// }
arr.forEach((value,index,arr)=>console.log(index,value));