// A mutação ocorre quando criamos um objeto a partir de outro.
// Este 'novo objeto' não é um novo objeto, e sim uma referência ao original
// As mudanças dele podem afetar a cópia e vice-versa 

const a = {
  name : 'Ana',
}
const b = a

console.log(a, b)

a.age = 20

console.log(a, b)

b.weight = 50

console.log(a, b)

delete b.name

console.log(a, b)