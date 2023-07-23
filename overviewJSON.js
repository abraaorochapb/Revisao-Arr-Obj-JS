const userData = {
  name: 'Abraao',
  age: 19,
  Occupation: 'Estudante'
}

let userJSON = JSON.stringify(userData) // transformando um objeto em uma string JSON
console.log(userJSON)

console.log(JSON.parse(userJSON)) //retornando para um objeto comum