let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let operation = document.querySelector('#operation');
let ans = document.querySelector('#answer');



function getanser() {
    
    
    let problity = Math.random();
    let a = parseInt(num1.value);
    let b = operation.value;
    let c = parseInt(num2.value);
    
    let answer = 0;
    let op = {
        '+': '-',
        '*': '/',
        '-': '+',
        '/': '*'
    }
    if (problity <= 0.1) {
        b = op[b];
        console.log('Worng');
        

    }


    switch (b) {
        case '+': answer = a + c;
            break;
        case '-': answer = a - c;
            break;
        case '*': answer = a * c;
            break;
        case '/': answer = a / c;
            break;

        default: answer = "Invalid Opertaion pefomed";
            break;
    }
    
    ans.innerHTML = `Answer is :${answer} `




}