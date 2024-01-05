/*1. Aplicando a técnica de destructuring, crie uma função chamada 'detalharEndereco' que 
receba um objeto 'endereco' contendo propriedades como 'rua', 'cidade' e 'CEP'. A 
função deve desestruturar essas informações do objeto e retornar uma string formatada 
com esses detalhes. Por exemplo, se o objeto for {rua: 'Rua das Flores', cidade: 'Porto 
Alegre', CEP: '90000-000'}, a função deve retornar a string: 'Rua: Rua das Flores, Cidade: 
Porto Alegre, CEP: 90000-000'."*/ 


function detalharEndereco(endereco){
    const {rua, cidade, CEP} = endereco
    return `Rua: ${rua}, cidade: ${cidade}, CEP: ${CEP}`  
}
console.log(detalharEndereco({rua: 'Rua das Flores', cidade: 'Porto Alegre', CEP: '90000-000'}))