/*eslint-disable*/
// one number type in java script wether it is decimal point or not.
const age = 100
const money = 1000.50
console.log(typeof age)
console.log(typeof money)
// tyoe of used to find out the type of data
console.log('10' * '10')
console.log('10' - '5')
console.log('10' + '5')
// in + symbol it is act asconcadinator
// above work in all sub, mul, div
// +concadinator
console.log(Math.round(2.2))
console.log(Math.floor(2.4))
console.log(Math.ceil(2.4))
console.log(Math.random())
// floor,prevoiues hole
const sweets = 20
const kids = 3
const eachKidGets = Math.floor(sweets / kids)
console.log(eachKidGets)
const leftsweet = sweets % kids
console.log(leftsweet)
// ceil,return the next hole value
// ----------------------------------
let x = 2 ** 3
console.log(x)
x = Math.pow(2, 3)
console.log(x)
// ________________________________
console.log(0.1 + 0.2)
// based on base 10 and 2 , the minute error occer
 //let costOfProduct = 100.95; reprecented in paise
let costOfProduct = 10095;
//so, when working with money , don't store them as (rupees.paise) or (dollars.cents)store all of the money in (paise/cents) as you won't have to deal with fractions only whole nos, when need to dispaly to user , just convert them back.
console.log(typeof Infinity);
console.log(typeof -Infinity);
let result=10/'hello';
console.log(typeof NaN);
//----------------------------------
//NaN data type is also a number.
//check the data type of a value 
 /*let z=100;
 let result1 =Number.isInteger(z);
 console.log(`Is z a number :${result1}`);
 let y="abcd";
 result1=Number.isInteger(y);
 console.log(`Is y a number : ${result1}`);
 
 let d="abcd";

 result1=(type d==='string');
 console.log(`is y a string:${result1}`);
 let flag=true;
 result =(type flag==='boolean');
 console.log(`Is flag a boolean :${result1}`);
let nos=[1,2,3,4,5];
result =(type nos==='object');
console.log(`Is nos an object :${result1}`);*/
//unexpected identyfier error occers
//objects started.
const person={
    first:'Hussanar',
    last:'abdul hakkeem',
    age:20
};
console.log(person.first);
console.log(person.last);
console.log(person.age);
person.first='Tom';
person.last='Jerry';
console.log(person.first);
console.log(person.last);
person.last=null;
console.log(person.last);

const empty={};
const point ={x:10,y:50};
const point2={x:point.x,y:point.y + 1};
console.log(point2);
//when the name of the property is have space then we put it into the single quotes
const book={
    'main title':'java script',//space 
   // 'sub-title': 'Guide to java script for beginer',//hifund
    'for':'studernts',//reserved keyword
    author:{
        first:'venkat',
        last:'krishnan'
    }
};
console.log(book['main title']);
//console.log(book['sub-title']);
console.log(book['for']);
console.log(book.author.first);
console.log(book.author.last);
//console.log(book.sub-title);
console.log(book.for);
