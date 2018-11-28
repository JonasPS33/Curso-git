const valores=[7.3,3.4,5.6,1.2]
console.log(valores[1],valores[3])
valores[4]=2.9
console.log(valores)
console.log(valores.length)
valores.push({id:3},false,null,'teste')
console.log(valores)
console.log(valores.pop())
delete valores[0]
console.log(valores)
console.log(typeof valores)