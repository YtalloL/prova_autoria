/*3. Desenvolva uma função chamada 'analiseComplexaDeNumero' que retorne uma 
Promise. A função deve gerar dois números aleatórios entre 1 e 100, denominados 
'numero1' e 'numero2'. Realize as seguintes condições:
• Se a soma de 'numero1' e 'numero2' for par e maior que 150, a Promise deve 
ser resolvida com a mensagem: 'Condição especial atingida com [soma]!', onde 
[soma] deve ser substituído pelo valor da soma.
• Se apenas um dos números for múltiplo de 10, a Promise deve ser rejeitada com 
a mensagem: 'Número quase especial encontrado: [numero]', onde [numero] é 
o múltiplo de 10.
• Para todos os outros casos, a Promise deve ser resolvida com a mensagem: 
'Resultado comum: [numero1] e [numero2]', substituindo [numero1] e 
[numero2] pelos números gerados. */

function analiseComplexaDeNumero() {
    const numero1 = (Math.random() * 100)
    const numero2 = (Math.random() * 100)
    return new Promise((resolve, reject) => {
        try {
            if ((numero1 + numero2) > 150 && ((numero1 + numero2) % 2) == 0) {
                resolve(console.log(`Condição especial atingida com ${numero1 + numero2}!`))
            }
            else if (((numero1 % 10) == 0 || (numero2 % 10) == 0)) {
                if ((numero1 % 10) == 0) {
                    resolve(console.log(`Número quase especial encontrado: ${numero1}`))
                } else if ((numero2 % 10) == 0) {
                    resolve(console.log(`Número quase especial encontrado: ${numero2}`))
                }
            }
        }
        catch { 
            reject(console.log(`Resultado comum: ${numero1} e ${numero2}'`))
        }
    })

}

console.log(analiseComplexaDeNumero)