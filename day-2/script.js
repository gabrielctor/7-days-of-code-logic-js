alert('Olá, seja bem vindo!')
const name = prompt('Qual o seu nome?')
const age = prompt('Qual a sua idade?')
const language = prompt('Qual linguagem de programação você está estudando atualmente?')
alert(`${name}, então você tem ${age} anos e estuda ${language}.`)

while(true) {
    let option = prompt(`Você gosta de estudar ${language}? (sim ou não)`).toLowerCase()
    if(option === 'sim') {
        alert('Isso é ótimo!')
        break
    } else if(option === 'não') {
        alert('É uma pena. Talvez você se encontre em outra linguagem.')
        break
    } else {
        alert('Não entendi sua resposta. Responda com "sim" ou "não".')
    }
}