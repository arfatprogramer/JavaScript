 const factroial=n=>
{   let fac=1;
    for(let i=1;i<=n;i++){
        fac=i*fac;
    }
    return fac;
}

console.log(factroial(5));
