const nome='Ana'
const concatenaçao = 'Ola' + nome+'!'
const template=`
Ola
${nome}!`
console.log(concatenaçao,template)
console.log(`1+1 ${1+1}!` )
const up=texto=>texto.toUpperCase()
console.log(`Ei..${up('cuidado')}!`)