// const o = new Object()
// const a = new Array()
// const d = new Date()
// const f1 = function () {
//   document.writeln('the Cow Jumped Over the Moon')
// }
// console.log('Date = ' + d)
// f1()
// -------------------
// const o1 = Object.create({ x: 100, y: 200 })
// console.log('x=' + o1.x + 'y=' + o1.y)
// console.log(o1)
// _______________________
const o2 = Object.create(null)
const o3 = Object.create(Object.prototype)
// const o3=new Object();
// const o3={};
// console.log(o2)
// console.log(o3)
// ---------------------------------
const o4 = { x: "don't change this value" }
// console.log(o4.x)
let p = Object.create(o4)
// console.log(p)
// parent child relation.
// ___________________________________
function getChild (parent) {
  if (parent == null) throw TypeError()// throw exception
  return Object.create(parent)
}
// used exception handling
// o4 = null
p = Object.create(o4)// object .create null inherit the parent but no property
// console.log(p)
p = getChild(o4)
// ___________________________________
Object.prototype = 0
// console.log(Object)
// the prototype properties of built-in are read only.
// Object.prototype unchanged
// _______________________________
const o5 = {}
// console.log(o5)
o5.x = 100
console.log(o5)
// the o5 inherit the property of the object and the variable are dynamically change able.
// ___________________________________
p = getChild(o5)
console.log(p)
p.y = 200
const q = getChild(p)
q.z = 300
console.log(q)
console.log('q.x+q.y+qz' + (q.x + q.y + q.z))
console.log('p.x+p.y' + (p.x + p.y))
console.log('o5.x' + o5.x)
// the parent cannot access the propertyof the child. parent cannot .
// _______________________________
const book = {
  'main title': 'javascript',
  'sub-title': 'The Definitive Guide',
  for: 'all audience',
  author: {
    firstname: 'Donald',
    surname: 'Duck'
  }
}
let len
// book = null
if (book) {
  if (book.subtitle) {
    len = book.subtitle.length
    console.log(len)
  } else { console.log('book.subtitle undefined') }// need to print but hear not printing
} else { console.log('book is null') }
len = book && book.subtitle && book.subtitle.length
if (len) console.log(len)
// _____________________________
console.log(book.author)
delete book.author
console.log(book.author)
console.log(book['main title'])
delete book['main title']
console.log(book['main title'])

const o6 = { x: 100 }
console.log(o6.x)
delete o6.x
console.log(o6.x)
console.log(o6.toString)
delete o6.toString
console.log(o6.tostring)
// var a=1;
// delete this.a;
// function f1(){}
// delete this .f1();
// this cannot be deleted
// _______________________________
