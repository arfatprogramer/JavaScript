// Readom Business name Genrators 
// genrate name by combining objective

// Adjactives :
// Crazy 
// Amazin 
// Fire

//shop name:
// Engine 
// Food 
// garments

// Another word:
//  Bros 
//  Limited 
// Hub   

let answer = document.getElementById('answer');

const randomNumber = () => {
    let i = 0;
    for (i; i < 100; i++) {
        let num = Math.floor(Math.random() * 10);
        if (num <= 3) {
            return num;
        }
    }

}
const shopName = (x) => {
    if (x == 1) {
        return "Engine";
    }else if(x==2){
        return"Food";
    }else{
        return"Garments";
    }
}

const OtherWord = (x) => {
    if (x == 1) {
        return "Bros";
    }else if(x==2){
        return"Limited";
    }else{
        return"Hub";
    }
}
const Adjactivess = (x) => {
    if (x == 1) {
        return "Crezy";
    }else if(x==2){
        return"Amazing";
    }else{
        return"Fire";
    }
}


function genrate() {
    let first=Adjactivess(randomNumber());
    let second=shopName(randomNumber());
    let third=OtherWord(randomNumber());
    console.log(`Randome name is : ${first}${second}${third}`);
    answer.innerHTML=`Randome name is : ${first}${second}${third}`;
    

}

