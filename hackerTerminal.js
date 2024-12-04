//terminal Code
let html= `<div class="terminal-menu"><h3>Session Highjack </h3><h3><span>/</span> <span>\</span></h3></div>
        <div class="terminal-text">
           
        </div>`;
// terminal will dispay after 3s
let terminal=document.querySelector('.terminal')
setTimeout(() => {
    terminal.innerHTML=html
}, 3000);

let dotInterval;
// blinkin the dote 
// Function to make the last three dots blink
const animateDots = () => {
    let p = document.querySelectorAll('p');
    if (p.length > 0) {
      let lastElement = p[p.length - 1];
      let baseText = lastElement.innerText; 
  
      let dotState = 0; 
      dotInterval=setInterval(() => {
        lastElement.innerText = baseText + ".".repeat(dotState);
        dotState = (dotState + 1) % 4; // Cycle between 0, 1, 2, 3 dots
      }, 500);
      
    }
  };

// it is a function which display terminal processe every 4 sec
async function printTerminal(params) {
    return new Promise((resolve,reject)=>{
        animateDots();
        setTimeout(() => {
            let p=document.createElement('p')
            p.innerHTML=params
            document.querySelector('.terminal-text').appendChild(p)
            clearInterval(dotInterval)
            resolve();
        }, 4000);
        
    });
}


//IIFE function 
(async function(){
    
    await printTerminal(' $> Initializing Hacking')
    await printTerminal(' $> Reading Your Files')
    await printTerminal(' $> Password Files Detected')
    await printTerminal(' $> sending all password and persional file to server')
    await printTerminal(' $> Cleaning Up')
    animateDots();
    setTimeout(() => {
        clearInterval(dotInterval)
    }, 10000);
    
}())