const fun1=(callBack)=>{
console.log('hey i am fun 1');
callBack(fun3);
}

const fun2=(callBack)=>{
    console.log('hey i am fun 2');
    callBack(fun3)
    }
    
const fun3=()=>{
console.log('hey i am fun 3');

}

const callBacks=(text,callBack)=>{
    console.log(text);
    callBack(fun2);
    
}

callBacks("callBack running",fun1);

