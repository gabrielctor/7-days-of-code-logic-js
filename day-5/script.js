let fruit = []
let dairyProduct = []
let frozen = []
let candy = []
        
while(true) {
    const addOption = prompt('Gostaria de adicionar um novo produto à lista de compras? (sim ou não)').toLowerCase()
    if(addOption === "sim") {
        let product = prompt('Qual produto gostaria de adicionar?')
        let category = prompt('Qual a categoria do produto? (frutas, laticínios, congelados ou doces)').toLowerCase()
        if(category === "frutas") {
            fruit.push(product)
            alert('Produto adicionado com sucesso!')
        } else if(category === "laticínios") {
            dairyProduct.push(product)
            alert('Produto adicionado com sucesso!')
        } else if(category === "congelados") {
            frozen.push(product)
            alert('Produto adicionado com sucesso!')
        } else if(category === "doces") {
            candy.push(product)
            alert('Produto adicionado com sucesso!')
        } else {
            alert('Categoria inválida.')
        }
    } else if(addOption === "não") {
        break
    } else {
        alert('Resposta inválida.')
    }
}

fruit.sort()
dairyProduct.sort()
frozen.sort()
candy.sort()

alert(`• Lista de Compras • \n Frutas: ${fruit} \n Laticínios: ${dairyProduct} \n Congelados: ${frozen} \n Doces: ${candy}`)