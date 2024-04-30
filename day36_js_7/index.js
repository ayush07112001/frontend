let List=[10,2,8,30,3,9];
let High=List[0];
let SH;
for(let i=1;i<List.length;i++){
    if(High<List[i]){
        SH=High;
        High=List[i];
    }
    else if(SH<List[i]){
        SH=List[i];

    }
}
console.log(SH);