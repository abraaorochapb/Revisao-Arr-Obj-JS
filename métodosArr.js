// Metodos sao como funçoes, acessamos com notação de ponto e utilizamos () para invocar.OOP
// Um importante conceito da OOP:  Objetos são compostos por métodos e propriedades.

const metodo = () => {
  let a = ['arroz', 'feijao', 'macarrao']
  console.log(a)
  a.splice([2])
  console.log(a)
}
metodo()

// como podemos ver, splice é um metodo que retira um ou mais elementos do array.
const metodo2 = () => {
  let a = ['arroz', 'feijao', 'macarrao']
  console.log(a)
  a.push('carne')
  console.log(a)
}
metodo2()
// mais um exemplo de metodo. 


const numbers = [1, 2, 3, 4, 5]
const numbers2 = [7, 8, 9, 10] 
const allnumbers = numbers.concat(numbers2) 
console.log(`Exemplo metodo concat ${allnumbers}`)


const text = 'Ola mundo'
console.log(text.toUpperCase())
console.log(text.indexOf('m'))

// metodo push = adiciona os elementos no fim array
numbers.push('cu', 'buceta')
console.log(numbers)

//metodo pop = exclui o ultimo elemento do array
numbers.pop()
console.log(numbers)

//metodo shift = exclui o primeiro elemento do array
numbers.shift()
console.log(numbers)

//metodo unshift = adiciona como primeiro elemento do array
numbers.unshift('cu')
console.log(numbers)

//metodo includes = verifica se o elemento existe no array
console.log(numbers.includes('cu'))

// metodo indexOf = retorna o indice do elemento e lastIndexOf = retorna o indice do ultimo elemento
console.log(numbers.indexOf('cu'))

