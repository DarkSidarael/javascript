const prompt = require('readline-sync')

const idade = prompt.question("Qual e a sua idade? ")

const idadeNumber =Number(idade)

console.log(idadeNumber, typeof idadeNumber)

console.log(Number('x'))

console.log(String(10), typeof String(10))