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
    if(age>=18 ){
    document.getElementById("vote").textContent=`u can vote `
    console.log(`user age : ${age}`)
    }else if(age>0){
        document.getElementById("vote").textContent=`come back after ${18-age} years`;
        
    }else{
        document.getElementById("vote").textContent=`go back to grave`;

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
const mini=1;
const maxi=6;
let dice1=document.getElementById(`dice1`);
let dice2=document.getElementById(`dice2`);
let dice3=document.getElementById(`dice3`);





document.getElementById("roll").onclick=function(){
    let rand1=Math.floor(Math.random()*(maxi-mini)+mini);
    let imagePath1 = `dice-img/dice-${rand1}.png`;

    let rand2=Math.floor(Math.random()*(maxi-mini)+mini);
    let imagePath2 = `dice-img/dice-${rand2}.png`;

    let rand3=Math.floor(Math.random()*(maxi-mini)+mini);
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

    guess = Number(document.getElementById('numm').value);
    if(guess>random_numm){
        orray.textContent=`guess a low`;
        count_life+=1;
        count_num.textContent=`TRIES ${count_life}`;
    }
    else if(guess<random_numm){
        orray.textContent=`guess a high`;
        count_life+=1;
        count_num.textContent=`TRIES ${count_life}`;

    }
    else if(guess==random_numm){
        submit_num.remove();
        orray.textContent=`you a genius`;
        count_life+=1;
        count_num.textContent=`FINALLY @ ${count_life}`;
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
const includeLC=true;//lower char
const includeUC=true;//upper char
const includeNUMS=true;//numbers
const includeCHAR=true;//special chars


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
//callback = function passed as an argument to an another function



function summ(call_back,x,y){
    let result_summ =x+y;
    call_back(result_summ);
}

function display_console(result_summ){
    console.log(`Sum : ${result_summ}`);
}

summ(display_console,8,5); //Sum : 13

//----------------------------------------------------------------------------
//forEach() = to iterate over elements of an array and apply a specified function to each element

// array.forEach(callback)
// needs - element,index,array

let allnums = [1,2,3,4,5,4];
allnums.forEach(cube_numsss);

allnums.forEach(display_log);


function display_log(numsss){
    console.log(numsss);
}

function cube_numsss(element,index,array){
    array[index]=element**3;
}


let fun_foods=['kiwi','lichi','pomegranate'];

fun_foods.forEach(CapitalAt0);
fun_foods.forEach(display_log);

function CapitalAt0(element,index,array){
    array[index]=element.charAt(0).toUpperCase()+element.slice(1);
}

// Kiwi
// Lichi
// Pomegranate



//----------------------------------------------------------------------------
//Map() method - accepts the callback and applies the function to each element of an array,then returns a new array

let numbs=[1,5,9,7,5,3];

let new_numbs=numbs.map(square_numbs)
console.log(new_numbs)
//[1, 25, 81, 49, 25, 9]

function square_numbs(element){
    return Math.pow(element,2);
}


const date_YYDDMM=['2024-30-12','2026-12-10','2020-19-04'];

const date_DDMMYY=date_YYDDMM.map(date_dmy);

console.log(date_DDMMYY)
// ['30 / 12 / 2024', '12 / 10 / 2026', '19 / 04 / 2020']
function date_dmy(element){
    const parts=element.split("-");
    return `${parts[1]} / ${parts[2]} / ${parts[0]}`
}

//----------------------------------------------------------------------------
// .filter() = creates new arrray by filtering out elements

numbs=[1,2,3,4,5,6];

let even_numbs=numbs.filter(is_even);

console.log(even_numbs)
//[2, 4, 6]

function is_even(element){
    return element % 2 === 0;
}

const fruits_words=["kiwi","orange","apple","mango","pomegranate","pineapple","lichi"];



function fruits_5(element){
    return element.length<=5;
}

const fruits_short=fruits_words.filter(fruits_5);

console.log(fruits_short);
//['kiwi', 'apple', 'mango', 'lichi']

//----------------------------------------------------------------------------
// .reduce() -reduces the elements of an array to single value

let prices_=[10,50,500,3,277];

function total_(acc,element){
    return acc+element;
}

let total_prices = prices_.reduce(total_);

console.log(total_prices) //840

let grades=prices_.reduce(average_);

console.log(grades)

function average_(accumulator_,currentVal_,currentIndex_, array_){
    accumulator_+=currentVal_;
    if(currentIndex_<array_.length){
        return accumulator_/array_.length
    }else{
        return accumulator_;
    }
}

//set time to execute in ms ; 1000ms = 1sec

// setTimeout(hello,3000)

// function hello(){
//     console.log("hello on 3sec")
// }


// setTimeout(function hello__(){
//     console.log("hello from inside");
// },5000)


//----------------------------------------------------------------------------
//function expressions = to define functions as values or variables

numbs=[1,2,3,4,5,6];
const square_numbs_=numbs.map(
        function(element){
            return Math.pow(element,2);
})

console.log(`square ${square_numbs_}`)
//square 1,4,9,16,25,36


const cube_numbs_=numbs.map(function(element){
    return Math.pow(element,3);
})

console.log(`cube ${cube_numbs_}`)

//----------------------------------------------------------------------------
//arrow funstions =to write functions that are used only once

const hellno = () => console.log("hellno");

hellno();
//hellno

const hellno_name = (_name) => console.log(`hellno ${_name}`);

hellno_name("nikola");
//hellno nikola 


// setTimeout( ()=> console.log(`oklohoma`),3000)
//oklohoma


//numbs=[1,2,3,4,5,6];
const cube_numbs__=numbs.map((element) =>Math.pow(element,3))
console.log(cube_numbs__)
//[1, 8, 27, 64, 125, 216]

//----------------------------------------------------------------------------
//objects
//object ={key:value,function()}

const person1 ={
    fname:"sponge",
    lname:"pookie",
    age:2,
    isgood:false,
    sayhello: ()=> {console.log(`heeyloo patrick`) }
}

const person2={
    fname:"nottie",
    lname:"lama",
    age:85,
    isgood:true,
    ishungry:() => {console.log(`gib me  crabbs`)},
    nameis: function () {return this.fname+" "+ this.lname}

}

console.log(person1)
//{fname: 'sponge', lname: 'pookie', age: 2, isgood: false}

person1.sayhello();
//heeyloo patrick

console.log(person2.age) //85

person2.ishungry();
//gib me  crabbs

//----------------------------------------------------------------------------
//this = reference to an object where THIS is used.

// to not this.() with arrow function `=>`  ,Arrow functions have lexical 
//scope for this, which means they do not bind their own this but inherit this 
//from the surrounding code.

//object depends on the immediate reference

//this.() @line709
console.log(person2.nameis());
//nottie lama


//console.log(this)

//----------------------------------------------------------------------------
//constructors

function CAR (make,model,year,price,old){
    this.make=make,
    this.model=model,
    this.year=year,
    this.price=price,
    this.old=old,
    this.speed= function (speed){ return `top speed ${speed}`}
}

const CAR1=new CAR("FORD","GT",2005,55000,5);

const CAR2=new CAR("FERRARI","SF90",2016,96000,3);

console.log(CAR2.make)//FERRARI

console.log(CAR1.speed(310))//top speed 310

//----------------------------------------------------------------------------
//class =provides a structured and cleaner way to work with objects
//ES-6 feature

class products{
    constructor(P_name,P_price){
        this.name=P_name,
        this.price=P_price;
    }
    displayProduct() {
        console.log(`${this.name} costs $${this.price.toFixed(2)}`);
    }

    TotalCost(sellTax){
        return this.price+this.price*sellTax
    }
}
const sellTax=0.05

const newProduct1=new products("jeans",50);
const newProduct2=new products("shirt",10);

newProduct1.displayProduct();//jeans costs $50.00

const newProduct2Price=newProduct2.TotalCost(sellTax)
newProduct2.displayProduct();//shirt costs $10.00
console.log(`Total Price(incTAX) : $${newProduct2Price}`)//Total Price(incTAX) : $10.5

//----------------------------------------------------------------------------
//static =keyword that defines properties or methods of that class itself

class mathsUtil{
    static PI=3.14159;

    static getCircum(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return this.PI*(radius**2);
    }
}


console.log(mathsUtil.PI)//3.14159
//directly calls the static property of the class without creating any object from that class

console.log(mathsUtil.getCircum(5))//31.4159

console.log(mathsUtil.getArea(5))//78.53975


class users{
    static userCount=0;

    constructor(username){
        this.username=username;
        users.userCount++;
    }

    helloUser(){
        console.log(`hello ${this.username}`)
    }
    static getUsersCount(){
        return this.userCount;
    }
}

const user1=new users("lallo");

console.log(user1.username)

console.log(users.userCount)//1
// as usercount is the property of the class and not the object ,we use the class to access it, ie. users

const user2=new users("paplu");
console.log(users.userCount)//2

user2.helloUser()//hello paplu

console.log(users.getUsersCount()) //2


//----------------------------------------------------------------------------
//inheritance = inherit properties and method from parent class

class sde_dept extends users{   
}

const sde_1=new sde_dept("sde_1 rakesh");

sde_1.helloUser()//hello sde_1 rakesh

console.log(sde_dept.getUsersCount())//3
//new sde_1 is added to users class



class Animals{
    constructor(name){
        this.name=name;
    }

    isAlive(){
        console.log(`${this.name} is alive`);
    }

    isEat(){
        console.log(`${this.name} eats`);
    }
}

class Dogs extends Animals{
    breed(type){
        this.type=type;
        console.log(`${this.name} is a ${this.type}`);
    }
}

const leo= new Dogs("Leo");

leo.breed("belgium shepard")
//Leo is a belgium shepard

const bruinie = new Dogs("bruinie");

bruinie.isAlive() //bruinie is alive

//------------------------------------------------------------------
//super class = a keyword used to accessproperties or methods of parent class(ie. super class)

class Animals2{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    move(speed){
        console.log(`${this.name} moves at ${speed} kph`);
    }
}

class Birds extends Animals2{
    constructor(name,age,flySpeed){
        super(name,age);
        this.flySpeed=flySpeed;
    }
    fly(){
        console.log(`${this.name} can swim`);
        super.move(this.flySpeed);
    }
}

class Cats extends Animals2{
    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed=runSpeed;
    }
    run(){
        console.log(`${this.name} can run`);
        super.move(this.runSpeed);
    }
}

const chica=new Birds("chica",2,20);

const lucy=new Cats ("lucy",3,32);

console.log(chica.flySpeed)//20

lucy.run();

//------------------------------------------------------------------
//special methods
//getter=makes a property readable
//setter=makes a property writable