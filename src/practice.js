/* eslint-disable no-undef */
const person = {
  name: 'hussain',
  age: '20',
  dob: '18apr'
}
console.log(person)
console.log(person.name)
console.log(`my name is :${person.name}`)
person.name = 'hassian'
console.log(person)

delete person.age
console.log(person)
const secondperson = Object.assign({}, person)

secondperson.name = 'hakkeem'
console.log(secondperson)
secondperson.relation = 'father'
console.log(secondperson)
person.relation = 'brother'
console.log(person)
const statement = 'the value of pi is '
console.log(`${statement}: ${Math.PI}`)
const address = `house:14/5
madukkarai main road
sundarapuram
coimbatore-641021`
console.log(address)
const message = 'Hello world'
console.log(message)
function greet () {
  console.log('hi all how are you')
  // eslint-disable-next-line no-constant-condition
  if (true) {
    console.log('vanakkam ')
    // eslint-disable-next-line no-unused-vars
    function log () {
      console.log('message')
    }
  }
  for (var i = 0; i < 10; ++i) {
    console.log(`the number is:${i}`)
    log()
  }
  console.log(i)
};
greet()
// __________________________________
