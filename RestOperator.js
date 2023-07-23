//rest operator é utilizado para receber indefinidade de argumentos em uma função

const somaInfinita = (...args) => {
  let total = 0
  args.forEach(i => {
    total += i
  })
  return total
}

console.log(somaInfinita(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))