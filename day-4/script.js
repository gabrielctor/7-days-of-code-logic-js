function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

let drawnNumber = getRandomNumber(0, 10)

for(i = 0; i < 3; i++) {
    const numberOption = prompt('Eu pensei em um número de 0 a 10, tente adivinhar!')
    let remainingAttempts = 2 - i

    if(numberOption == drawnNumber) {
        alert('Muito bem, você acertou!')
        break
    } else {
        alert('Não foi dessa vez.')
        const optionContinue = prompt(`Quer tentar de novo? Se sim responda "continuar". (Tentativas restantes: ${remainingAttempts}`).toLowerCase()
        if(optionContinue != "continuar") {
            break
        }
    }
}

if(i == 3) {
    alert(`Número de tentativas excedido! Você só tinha 3. O número sorteado era ${drawnNumber}.`)
}