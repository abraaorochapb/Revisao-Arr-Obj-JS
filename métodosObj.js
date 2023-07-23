// Podemos copiar todas as propriedades de um objeto para outro objeto com o metodo assign
// Um objeto ou array criado com const pode ter seus elementos e propriedades modificados 

const obj = {
  a : 'test',
  b: true
}

console.log(obj instanceof Object)

const obj2 = {
  c: []
}
Object.assign(obj2, obj)

console.log(obj2)

//mais uma forma de fazer isso:

const risoto = {
  a: 'arroz',
  b: 'frango',
  c: 'queijo'
}

const obj3 = Object.assign({}, risoto)

console.log(obj3)

// Alguns metodos de objetos:

// Object.keys(obj): Retorna um array contendo as chaves (propriedades) enumeráveis de um objeto.

console.log(Object.keys(obj2))

// Object.values(obj): Retorna um array contendo os valores das propriedades enumeráveis de um objeto.

console.log(Object.values(obj2))

// Object.entries(obj): Retorna um array de arrays contendo pares chave-valor enumeráveis de um objeto.

// Object.assign(target, ...sources): Copia as propriedades de um ou mais objetos de origem para um objeto de destino.

// Object.hasOwnProperty(prop): Retorna um booleano indicando se o objeto possui a propriedade especificada como 
// propriedade direta do objeto (não herdada).

// Object.is(value1, value2): Compara dois valores para determinar se eles são iguais. 
// É semelhante ao operador de igualdade (==), mas lida com alguns casos especiais de comparação, como NaN e -0.

// Object.freeze(obj): Congela um objeto, tornando suas propriedades imutáveis. 
// Novas propriedades não podem ser adicionadas e as existentes não podem ser alteradas ou excluídas.

// Object.seal(obj): Sela um objeto, tornando suas propriedades existentes imutáveis. 
// Novas propriedades não podem ser adicionadas, mas as existentes ainda podem ser modificadas ou excluídas.

// Object.getPrototypeOf(obj): Retorna o protótipo (objeto pai) do objeto especificado.

// Object.setPrototypeOf(obj, prototype): Define o protótipo (objeto pai) de um objeto especificado.

// obj.hasOwnProperty(prop): Verifica se o objeto possui uma propriedade específica, retornando um booleano.

// obj.toString(): Retorna uma string que representa o objeto.

// obj.hasOwnProperty(prop): Verifica se o objeto possui uma propriedade específica, retornando um booleano.
 