const prompt = require( 'readline-sync')
const idd = Number(prompt.question('Qual eh a sua idade?'))

const ehMidd = idd >= 18

if(ehMidd){
    console.log("Maior de idade.")
}else{
    console.log("Vai toma no cu😊😊")
}