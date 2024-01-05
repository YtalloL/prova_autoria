/* Utilizando arrow functions, desenvolva uma função chamada 'abreviarNomes' que use 
o método map para transformar uma lista de nomes completos (strings) em uma versão 
abreviada. A função deve transformar todos os nomes, exceto o último, em suas iniciais 
seguidas de um ponto. Por exemplo, se a função receber o array ['Carlos Alberto Silva', 
'Julia Pereira Gomes', 'Lucas Alves'], ela deve retornar ['C. A. Silva', 'J. P. Gomes', 'L. 
Alves'].*/
let x: number = 1
let ultimo_nome: string [] 
const abreviarNomes = (NomeCompleto) => {
   return NomeCompleto.map(nomes =>{ //'Carlos, Alberto, Silva', 'Julia, Pereira, Gomes', 'Lucas, Alves'
        nomes.substring(0, 1)
    
        
   })
}

console.log(abreviarNomes(['Carlos Alberto Silva', 'Julia Pereira Gomes', 'Lucas Alves']))