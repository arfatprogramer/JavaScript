 const factroial=n=>
{   let fac=1;
    for(let i=1;i<=n;i++){
        fac=i*fac;
    }
    return fac;
}

console.log(factroial(6));

let n=6;
let arr=Array.from(Array(n+1).keys()); // short cut for creating new array
let factroialNumber=arr.slice(1,).reduce((a,b)=>a*b); //last optin is arrorfunction it return value diretly in same line 
console.log(factroialNumber);

