function addition(n1, n2) {
    return Number(n1) + Number(n2)
}

function subtraction(n1, n2) {
    return Number(n1) - Number(n2)
}

function multiplication(n1, n2) {
    return Number(n1) * Number(n2)
}

function division(n1, n2) {
    return Number(n1) / Number(n2)
}

let operation = ''

while(true) {
    operation = prompt('Qual operação você gostaria de realizar? (soma, subtração, multiplicação e divisão) \n Ou desejar sair?').toLowerCase()

    while(operation != 'soma' && operation != 'subtração' && operation != 'multiplicação' && operation != 'divisão' && operation != 'sair') {
        alert('Opção inválida.')
        operation = prompt('Qual operação você gostaria de realizar? (soma, subtração, multiplicação e divisão) \n Ou desejar sair?').toLowerCase()
    }

    if(operation === 'sair') {
        break
    }
    
    const num1 = prompt('Qual o primeiro valor da operação?')
    const num2 = prompt('Qual o segundo valor da operação?')
    
    switch(operation) {
        case 'soma':
            alert(`O resultado é ${addition(num1, num2)}`)
            break
        case 'subtração':
            alert(`O resultado é ${subtraction(num1, num2)}`)
            break
        case 'multiplicação':
            alert(`O resultado é ${multiplication(num1, num2)}`)
            break
        case 'divisão':
            alert(`O resultado é ${division(num1, num2)}`)
            break
    }
}
