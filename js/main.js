// console.log("hello");
// console.log('jh ');
// window.alert(`warn u`)
// comment

document.getElementById("heading").textContent="WELCOME";

document.getElementById("text").textContent="how r u?";

document.getElementById("para").textContent="this is a para";

let elements = ["#heading", "#text", "#para"];
elements.forEach(id => {
    document.querySelector(id).style.cssText = "color: white; font-size: 36px;";
});



var x;
x=100;
console.log(x)

console.log("\n")//new line
let y;
y=x*2;
console.log(`its twice x  ${y}`) //use back-ticks ` ` to print variables inside string
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
function submitUsername() {
    username = document.getElementById("username").value;
    document.getElementById("heading").textContent = `HELLO ${username}`;
    console.log(`username: ${username}`);
}


document.getElementById("submit").onclick = submitUsername;

document.getElementById("username").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        submitUsername();
    }
});




var age;
function submitAge(){
    age=document.getElementById("age").value;
    age=Number(age);
    if(age>=18){
        document.getElementById("vote").textContent=`u can vote `
        console.log(`user age : ${age}`)
    }else{
        document.getElementById("vote").textContent=`come back after ${18-age} years`;
        
    }

}

document.getElementById("submit_age").onclick = submitAge;

document.getElementById("age").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        submitAge();
    }
});

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
const mini=1;
const maxi=6;
let dice1=document.getElementById(`dice1`);
let dice2=document.getElementById(`dice2`);
let dice3=document.getElementById(`dice3`);





document.getElementById("roll").onclick=function(){
    let rand1=Math.floor(Math.random()*(maxi-mini+1)+mini);
    let imagePath1 = `dice-img/dice-${rand1}.png`;

    let rand2=Math.floor(Math.random()*(maxi-mini+1)+mini);
    let imagePath2 = `dice-img/dice-${rand2}.png`;

    let rand3=Math.floor(Math.random()*(maxi-mini+1)+mini);
    let imagePath3 = `dice-img/dice-${rand3}.png`;

    dice1.src=imagePath1
    dice2.src=imagePath2
    dice3.src=imagePath3
    

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


let random_numm=Math.floor(Math.random()*50)+1;
console.log(`random num : ${random_numm}`);

let submit_num=document.getElementById(`submit_num`);
let count_life = 0;
let count_num = document.getElementById('count_left');
let orray = document.getElementById('num_guess_text');


submit_num.onclick=function(){
    let guess = Number(document.getElementById('numm').value);


    
    if(guess>random_numm){
        orray.textContent=`guess a low`;
        count_life+=1;
        count_num.textContent=`TRIES ${count_life}`;
    }
    else {
        orray.textContent=`guess a high`;
        count_life+=1;
        count_num.textContent=`TRIES ${count_life}`;

    }
    if(guess==random_numm){
        if(count_life==1){
            submit_num.remove();
            orray.textContent=`you a genius`;
            count_life+=1;
            count_num.textContent=`first try big WIN `;

        }else{
            submit_num.remove();
            orray.textContent=`you a genius`;
            count_life+=1;
            count_num.textContent=`FINALLY @ ${count_life}`;
        }
    }
    if(count_life>10){
        submit_num.remove();
        count_num.remove();
        orray.textContent=`LEAVE It BRUHHHHHH`;
    }
}



//----------------------------------------------------------------------------
//temp-converter

document.getElementById(`submit_temp`).onclick=function(){
    let temp =Number(document.getElementById(`temp_to_convert`).value);
    let toCelc=document.getElementById(`toCelc`);
    let toFahr=document.getElementById(`toFahr`);
    let final_temp=document.getElementById(`ansTemp`);

        if(toCelc.checked){
            temp= (temp - 32)*5/9;
            
            final_temp.textContent=temp.toFixed(2)+` C°`;
        }
        else if(toFahr.checked){
            temp=(temp *9/5) + 32;
            
            final_temp.textContent=temp.toFixed(2)+` F°`;
        }
        console.log(temp.toFixed(2));
}

//----------------------------------------------------------------------------


//array

let fruits=[ "apple", "bananana" ,"narangoimea"];
fruits.push("aaam");
fruits.pop();
fruits.unshift("mango") //add at beginning
fruits.shift(); //removes from beginning
fruits.length;
fruits.indexOf("apple")
fruits.sort();
fruits.sort().reverse();

//----------------------------------------------------------------------------
//spread op   ... = unpacks the elements
let numsbers=[51,65,64,65,15,5,684,86,873,784,178,5178]
console.log(Math.max(...numsbers));  //5178

let apnaname="nikolama baba";
console.log(...apnaname) //n i k o l a m a   b a b a

let vege=["potato","sabji","aalo"];

let whole_food=[...fruits,...vege]; //added both arrays into one
console.log(whole_food)
//['narangoimea', 'bananana', 'apple', 'potato', 'sabji', 'aalo']

whole_food=[...fruits,...vege ,"egges","milk"]; //can add elements too
console.log(whole_food) 
//['narangoimea', 'bananana', 'apple', 'potato', 'sabji', 'aalo', 'egges', 'milk']

//----------------------------------------------------------------------------
//rest parameter (...rest)  = bundles seperate elements into array

function inFridge(...foods){
    console.log(foods);
}

const food1="pizza";
const food2="ham";
const food3="coke";
const food4="burger";
const food5="fries";

inFridge(food1,food2,food3,food4,food5)
//['pizza', 'ham', 'coke', 'burger', 'fries']




function sum_total(...numbers){
    let result_sum=0;
    for(number of numbers){
        result_sum+=number;
    }
    return result_sum;

}
console.log(`your total is ${sum_total(1,2,3,5,65,2,6,5,5)}`);
//your total is 94



function joinString(...strings){
    return strings.join(" ");
}

const fullnamee=joinString("Mr.","Niko","Lama","bigZAW");

console.log(fullnamee);
//Mr. Niko Lama bigZAW


//----------------------------------------------------------------------------
// password generator


const PSWD_Length=12;
const includeLC=true;
const includeUC=true;
const includeNUMS=true;
const includeCHAR=true;


function generatePswd(PSWD_Length,includeLC,includeUC,includeNUMS,includeCHAR){

const LCase_pswd="abcdefghijklmnopqrstuvwxyz";
const UCase_pswd="ABCDEFGHIJKKLMNOPQRSTUVWXYZ";
const Nun_pswd="0123456789";
const Char_pswd="!@#$%^&*()_+";

let finalchars="";
let PSWD="";

finalchars += includeLC ? LCase_pswd :"";
finalchars += includeUC ? UCase_pswd :"";
finalchars += includeNUMS ? Nun_pswd :"";
finalchars += includeCHAR ? Char_pswd :"";
let i=0;
while(i<PSWD_Length){

    const randomIndexPSWD=Math.floor(Math.random()*finalchars.length)

    PSWD+=finalchars[randomIndexPSWD];
    i++;
}
return PSWD;
}

let get_pswd=document.getElementById(`get_pswd`)
let PSWD_=document.getElementById(`PSWD_`);
let PSWDpswd;
get_pswd.onclick=function(){
    PSWDpswd=generatePswd(PSWD_Length,includeLC,includeUC,includeNUMS,includeCHAR)
    PSWD_.textContent=`PASWWORD : ${PSWDpswd}`
    console.log(PSWDpswd)
}


//----------------------------------------------------------------------------
//callback
