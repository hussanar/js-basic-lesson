// 3 ways to create  string variables
// 2. using doublequotes
// 2. using doublequotes
// 1.using backticks quotes:
const my_name = 'namefileldempty'
const middle = 'Gabbar'
const last = 'singh'
console.log(my_name)
console.log(middle)
console.log(last)

const sentence = 'she\'s so "cool"'
console.log(sentence)
const sentance2 = "she's so cool"
console.log(sentance2)
const sentance3 = '\'she\'s so cool'
console.log(sentance3)
const sentance4 = "she's so \"cool\""
console.log(sentance4)
// multi line string using single qupte dose't work
const song1 = `I like 
ARR songs and 
Aniruth songs`
console.log(song1)
const hello3 = 'hello my name' + my_name + ' .nice to meet you '
console.log(hello3)
const hello4 = `hello my name is ${my_name}. Nice to meet you . iam ${1 + 100}years old`
console.log(hello4)

const html = `<div>
            <h2>${my_name}</h2>
        
            </div>`
console.log(html)
document.body.innerHTML = html
