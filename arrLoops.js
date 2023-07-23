let a = [1, 2, 3, 4 , 5]

for (item in a) {  // aq estamos fazendo um loop for in 
  console.log(item)
}

let b = ['abraao', 'solange', 'marceia']
for (item of b) {  // aq estamos fazendo um loop for of
  console.log(item)
}

// o Loop forEach é considerado como tendo a sintaxe mais simples
const animes = [
  {title:'Steins;Gate', year: 2005},
  {title:'Death Note', year: 2006},
  {title:'Code Geass', year: 2006},
]
animes.forEach(anime => { //iterando sobre cada objeto do array
 console.log(`Exibindo o anime ${anime.title}, produzido em ${anime.year}`)
})