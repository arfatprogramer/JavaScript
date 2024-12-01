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

let colors=["red",'pink','blue',"orange",'green','vilote','white','purple'];
const randomColors=()=>{
    let c=Math.floor(Math.random()*10);
    return colors[c];
    
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
