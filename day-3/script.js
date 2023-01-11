let areaOption = prompt('Qual área você gostaria de seguir? Front-end ou Back-end?').toLowerCase()

while(areaOption != 'front-end' && areaOption != 'back-end') {
    alert('Opção inválida.')
    areaOption = prompt('Qual área você gostaria de seguir? Front-end ou Back-end?').toLowerCase()
}

if(areaOption === "front-end") {
    alert('Ótimo! Então você prefere o lado do usuário!')
    const technology = prompt('Qual tecnologia vai escolher para estudar?').toLowerCase()
    alert(`${technology} é uma boa escolha!`)
} else if(areaOption === "back-end") {
    alert('Que legal! Então você fica com o lado do servidor!')
    const technology = prompt('Qual tecnologia você prefere para estudar?').toLowerCase()
    alert(`${technology} é uma boa escolha!`)
}

alert('Se optou por seguir uma área específica, tudo bem! Mas você também pode se tornar Fullstack e lidar com ambas as áreas!')
let sideOption = prompt('Se preferir seguir com a área escolhida, responda "continuar". Se preferir se aprimorar ainda mais, responda "fullstack".').toLowerCase()

while(sideOption != 'fullstack' && sideOption != 'continuar') {
    alert('Opção inválida.')
    sideOption = prompt('Se preferir seguir com a área escolhida, responda "continuar". Se preferir se aprimorar ainda mais, responda "fullstack".').toLowerCase()
}

if(sideOption === "continuar") {
    alert('Tudo bem! Se especializar é um bom caminho.')
} else if(sideOption === "fullstack") {
    alert('Certo! Assim você se tornará um desenvolvedor bem flexível.')
}

while(true) {
    const newTechnology = prompt('Qual outra tecnologia você gostaria de aprender?')
    alert(`${newTechnology} é uma boa escolha!`)
    const optionNewTechnology = prompt('Tem mais alguma? Se sim, responda "continuar".').toLowerCase()
    if(optionNewTechnology != "continuar") {
        break
    }
}

alert('Tudo bem! Bons estudos!')