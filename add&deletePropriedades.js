const car = {
  color: 'red',
  model: 'BMW',
  engine : 'v8',
  year: 2020
}

console.log(car)

car.doors = 4 // adicionando uma propriedade

console.log(car)

delete car.color  // removendo uma propriedade

console.log(car)