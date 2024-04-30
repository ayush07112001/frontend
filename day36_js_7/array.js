// const arr=[10,20,30,40,"superman","spiderman","google",10.23,40.23,true,false,'a','z','b'];
// console.log(arr)

const movies=[
    {title:'Ra.One',Actor:'SRK',Release:'2012',Hit:false,Flop:true},
    {title:'Infinity War',Actor:'RDJ',Release:'2018',Hit:true,Flop:false},
    {title:'Dhoom 3',Actor:'Amir Khan',Release:'2013',Hit:true,Flop:false},
    {title:'End Game',Actor:'Thanos',Release:'2019',Hit:true,Flop:false},  
]
// while loop
// console.log(movies)
// let i=0;
// while(i<movies.length){
//     console.log(movies[i].title)
//     i++;
// }


//   for in loop
// for(let key in movies){
//     console.log(key,movies[key])
// }



// for of loop
// for(let element of movies){
//     console.log(element)
// }

// for each

movies.forEach((value,index)=>console.log(value,index))