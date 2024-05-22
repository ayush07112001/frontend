const h1=document.querySelector('h1')
const InnerWidth=window.innerWidth
// h1.innerText=window.innerHeight
// h1.innerText=window.innerWidth

document.querySelector('#dark').addEventListener('click',()=>{
    document.body.style.backgroundColor='black'
    document.body.style.color='white'
    if(confirm("you are redirected to google.com \n ok to proceed")){

    

    location.assign('https://www.google.com')}
})

document.querySelector('#light').addEventListener('click',()=>{
    document.body.style.backgroundColor='white'
    document.body.style.color='black'
    if(confirm("you are redirected to amazon.com \n ok to proceed")){
        
        location.assign('https://www.amazon.com')}
})


