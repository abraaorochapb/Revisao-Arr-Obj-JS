// Utilizado para extrair um array menor de um array maior
// O intervalo é deternado pelos parâmetros passados 
// o último elemento é ignorado, se quisermos ele, devemos somar 1 ao indice final.

const arr1 = ['a', 'b', 'c', 'd', 'e']
let arr2 = arr1.slice(0, 4)
console.log(arr2)
arr2 = arr1.slice(0, 4 + 1)
console.log(arr2)

arr3 = arr1.slice(1) // vai pegar todos os elementos a partir do parametro
console.log(arr3)