const product=[
    {title:'iphone 15',price:90000,color:'black'},
    {title:'omen',price:80000,color:'black'},
    {title:'AC',price:45000,color:'white'},
    {title:'iphone 15',price:90000,color:'black'},
    {title:'iphone 15',price:90000,color:'black'}
]
for(let i=0;i<product.length;i++){

    // console.log(product[i]);
}
// product.forEach((value,index)=>console.log(value,index))

for(let key in product){
    // console.log(key,products[key]);
}
for(let element of product){
    console.log(element);
}
