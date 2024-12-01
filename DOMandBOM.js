// console.log("Hello")

// let boxes=document.getElementsByClassName("box")
// console.log(boxes)
// boxes[3].style.backgroundColor='red'
// boxes[1].style.backgroundColor='green'
// boxes[2].style.backgroundColor='blue'


// // document.querySelectorAll(".box").forEach(element => {

// //     console.log(element);
    
// // });
// let clas= document.getElementsByClassName("box");
let query =document.querySelectorAll(".box");


// query.forEach(element => {
//     console.log(element);
    
// });

// console.log(query.length);

// for (let index = 0; index < clas.length; index++) {
//     clas[index].style.backgroundColor="#111"+index;
    
    
// }

const randomColors=()=>{
    let r=0+Math.floor(Math.random()*255);
    let b=0+Math.floor(Math.random()*255);
    let a=0+Math.floor(Math.random()*255);

console.log(r,b,a);


    return `rgb(${r},${b},${a})`;
    
}


let btn=document.querySelector('#btn');
console.log(btn);
btn.style.margin='2px auto';
btn.style.display='block'

btn.addEventListener('click',()=>{
    query.forEach(e=>{
        e.style.backgroundColor=randomColors();
    })
})
