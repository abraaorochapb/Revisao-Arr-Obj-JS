// Strings também são objetos, portanto possuem metodos e propriedades.
// alguns sao muito semelhantes aos dos Arrays


// O metodo trim remove tudo que não é texto de uma string, o método não altera a string original
let str = '  testando  \n'
console.log(str)
console.log(str.trim())

// O metodo padStart insere um texto no começo da string
// o texto pode ser repetido de acordo com o segundo argumento ao metodo 
// ele determina o maximo de caracteres do texto alvo

const testePadStart = '1'
const newNumber = testePadStart.padStart(5, '0')
console.log(newNumber)

// também podemos fazer isso para o fim da string com o metodo padEnd


// metodo split separa uma string em um array

const frase = 'To com fome'
const arrFrase = frase.split(' ')
console.log(arrFrase)

// metodo join junta um array em uma string
const fraseDnv = arrFrase.join(' ')
console.log(fraseDnv)

// metodo repeat repete uma string n vezes
const fraseRepeat = frase.repeat(3)
console.log(fraseRepeat)