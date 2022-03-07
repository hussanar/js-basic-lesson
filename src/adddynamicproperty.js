const cody = new Object()
cody.living = true
cody.age = 33
cody.gender = 'male'
cody.getGender = function () {
  return cody.gender
}
console.log(cody.gender)
// ____________________________
const myObject = new Object()
myObject['0'] = 'f'
myObject['1'] = 'o'
myObject['2'] = 'o'
console.log(myObject)

const myString = new String('foo')
console.log(myString)
//___________________________________

//assing the value to the property of the 
const Person =functon(living,age,gender)  {
    this.living= living;
    this.age=age;
    this.gender=gender;
    this.getGender=fiunction(){
        return this.gender;
    };
};

const smith=new Person(true,33,'male');
console.log(smith);
//_________________________________
const myNumber= new Number(23);
const myString=new String('male');
const myBoolean=new Boolean('false');
const myObject=new Object();
const myArray=new Array('foo','bar');
const myFunction=new Function("x","y","return x*y");
myDate=new Date();
myRegExp=new RegExp('\bt[a-z]+\b');
myError=new Error('Sorry!');
console.log(myNumber.constructor);
console.log(myNumber.constructor);
console.log(myNumber.constructor);
console.log(myNumber.constructor);
console.log(myNumber.constructor);
console.log(myNumber.constructor);
console.log(myNumber.constructor);
console.log(myNumber.constructor);

