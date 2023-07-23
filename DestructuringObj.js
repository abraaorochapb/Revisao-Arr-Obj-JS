// O destructuring é uma funcionalidade que nos permite desestruturar algum tipo de dado
//No caso dos Objetos é possivel criar variáveis a partir de suas propriedades

const userData = {
  name: 'Abraao',
  age: 19,
  Occupation: 'Estudante'
}

const { name, age, Occupation } = userData
console.log(name, age, Occupation)

// renomear variaveis

const {name: firstName} = userData
console.log(firstName)