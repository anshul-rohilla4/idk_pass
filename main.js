// console.log("hello");
// console.log('jh ');
// window.alert(`warn u`)
// comment

document.getElementById("heading").textContent="WELCOME";

document.getElementById("text").textContent="how r u?";

document.getElementById("para").textContent="this is a para";


var x;
x=100;
console.log(x)

console.log("\n")
let y;
y=x*2;
console.log(`its twice x  ${y}`) //use back-ticks ``
//its twice x  200

console.log(`price is ₨${x}`) //take a sign u want to be printed before ${} ,can use $ too
//price is ₨100
console.log(`price is $${x}`)
//price is $100

console.log(typeof y)//number


let fname="loki"
let fav_food="pissa"

console.log(`${fname} likes ${fav_food} `) //loki likes pissa 



let online=true

console.log(typeof online)//boolean



//--------------------------------------------
//arithmetic op
//op precedence
//    () > exponents > [*,/,%] > [+,-]

//--------------------------------------------
//take input


// let full_name=window.prompt(`your name??`)
// let age=window.prompt(`your age??`)

// document.getElementById("intro").textContent= `your name is ${full_name} . you are ${age} years old . `;
// window.alert(location.hostname)



let username;
document.getElementById("submit").onclick = function(){
    username=document.getElementById("username").value;
    document.getElementById("heading").textContent=`HELLO ${username}`
    console.log(`username : ${username}`)

}




var age;
document.getElementById("submit_age").onclick = function(){
    
    age=document.getElementById("age").value;
    age=Number(age);
    if(age>=18){
    document.getElementById("vote").textContent=`u can vote `
    console.log(`user age : ${age}`)
    }else{
        document.getElementById("vote").textContent=`come back after ${18-age} years`;
        
    }

}

//--------------------------------------
//counter
var c = 0;

document.getElementById("count");
document.getElementById("dec").onclick=function(){
    c=c-1;
    count.textContent=c;
    count.style.color="red"

}

document.getElementById("inc").onclick=function(){
    c=c+1;
    count.textContent=c;
    count.style.color="green"

}

document.getElementById("reset").onclick=function(){
    c=0;
    count.textContent=c;
    count.style.color="black"

}

//shift operator
// let o = 1;
// console.log(o <<=3 );

//----------------------------------------------------------------------------

//random

// let rand_num;

// rand_num=Math.floor(Math.random()*10)+1;
// //random num 1-10
// document.write(`<br><br> a random number ${rand_num}`)

// console.log(rand_num);

// let rand_num2;
// const min=50;
// const max=100;

// rand_num2=Math.floor(Math.random()*(max-min)+min);
// document.write(`<br><br>new random num2 = ${rand_num2}`)

//----------------------------------------------------------------------------


//roll-dice
document.getElementById("rand1")
document.getElementById("rand2")
document.getElementById("rand3")
const mini=1;
const maxi=6;

document.getElementById("roll").onclick=function(){
    rand1.textContent=Math.floor(Math.random()*(maxi-mini)+mini);
    rand2.textContent=Math.floor(Math.random()*(maxi-mini)+mini);
    rand3.textContent=Math.floor(Math.random()*(maxi-mini)+mini);

}

//----------------------------------------------------------------------------


//payment mode

const subs=document.getElementById("mycheckbox");

const visa=document.getElementById("visabtn");
const mastrcd=document.getElementById("mastrcdbtn");
const paypl=document.getElementById("payplbtn");

const submit=document.getElementById("submit_card");

const sub_res=document.getElementById("subs_res");
const pay_res=document.getElementById("payment_res");

submit.onclick=function(){
    if(subs.checked){
        sub_res.textContent=`you are subscribed !!`;
        if(visa.checked){
            pay_res.textContent=`VISA  selected`;
        }
        else if(mastrcd.checked){
            pay_res.textContent=`MASTER CARD selected`;
        }
        else if(paypl.checked){
            pay_res.textContent=`PAYPAL  selected`;
        }
        else{
            pay_res.textContent=`Please select a payment mode`;
        }
    }
        
    
    else{
        sub_res.textContent=`please subscribe`;
    }
}

//----------------------------------------------------------------------------

//ternary operator  +

//condition ? codeIfTrue : codeIfFalse;
//short-cut to if-else statement;

let agw=8;

let msg = agw>=18 ? "you can vote" : "grow up kiddo";

console.log(msg)


//----------------------------------------------------------------------------
//switch statements

let day = 1;
switch(day){
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WED");
            break;
    case 4:
        console.log("THU");
        break;
    case 5:
        console.log("FRI");
        break;
    case 6:
        console.log("SAT");
        break;
    case 7:
        console.log("SUN");
        break;
    default:
        console.log(`shit no day`)
}


//----------------------------------------------------------------------------
//string-methods --manipulate and work with texts

let namee=`Jagoooe`
console.log(namee.charAt(0));//J
console.log(namee.indexOf(`g`));//2
console.log(namee.lastIndexOf(`o`));//5

//.trim -removes whitespaces
//toUpperCase()- to upper case
//toLowerCase()
//repeat(3) - repeat 3 times
//.startsWith(`k`) - does the string start with k char. returns boolean value
//endsWith(` `)
//includes()
//.replaceAll(`k`,`o`) - replace all k with o
//padStart(15,`0`) - if the lenght of string is less than 15 ,put 0 at the start to make it 15
//padEnd(15,`9`)


//----------------------------------------------------------------------------

//string-slicing = creating a sub-string from a portion of another string

const string1 = `elo nakiu`;

let name1=string1.slice(0,string1.indexOf(` `));//gives first name
let name2=string1.slice(string1.indexOf(` `)+1); //gives last name
console.log(name1)
console.log(name2)

//----------------------------------------------------------------------------
//METHOD chaining = to call one method after the other in one continuos line of code 

// let username1 =window.prompt(`username ??`);

// username1=username1.trim().charAt(0).toUpperCase() + username1.trim().slice(1).toLowerCase();
// methods used one after the other , replaces huge chuck of code with less lines of code as compared to before.usefull. handy  saves time by not creating extra variables


// console.log(username1);

//----------------------------------------------------------------------------

//logical operators -combine or manipulate boolean values
// AND -&&
//OR - ||
//NOT - !


// =   assignment operator
// ==  comparison op
// === compare value and data type
// !=  inequality op
// !== strict inequality operator

//----------------------------------------------------------------------------

//while loop

//do-while loop

//for loop
//continue;
//break;

//----------------------------------------------------------------------------
//num guesser


let random_numm=Math.floor(Math.random()*10)+1;
console.log(`random num : ${random_numm}`);

let submit_num=document.getElementById(`submit_num`);
let count_life = 3;
let count_num = document.getElementById('count_left');
let orray = document.getElementById('num_guess_text');

count_num.textContent = `GUESS LEFT ${count_life}`;




submit_num.onclick=function(){
    let guess = Number(document.getElementById('numm').value);

    if(guess==random_numm){
        submit_num.remove();
        count_num.remove();
        orray.textContent=`you a genius`;
    }
    else{

        count_life-=1;
        orray.textContent = "you a dumb!";
        if(count_life>0)
            count_num.textContent=`GUESS LEFT ${count_life}`;
        else{
            submit_num.remove();
        count_num.remove();
        orray.textContent=`u DUMB!`;

        }


    }
    

}

