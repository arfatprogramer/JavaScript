let prom1 = new Promise((res,rej)=>{
    console.log('Promise is Running');
    let num =Math.floor(Math.random()*10)
    console.log(num);
   setTimeout(() => {
    if(num>5){
        res("Promeis is Resolve")
    }else{
        rej("Promise is Rejected")
    }
   }, 2000);
    
    
})

console.log("before promise");

prom1.then((e)=>{
    console.log(e);
    
}).then((e)=>{
    console.log("Hurry, The promise is Solve");
    
}).catch((e)=>{
    console.log(e);
    
})

console.log('After Promise');
