let fruit = []
let dairyProduct = []
let frozen = []
let candy = []
        
while(true) {
    const addOrRemoveOption = prompt('Você gostaria de adicionar ou remover um item da lista de compras? Você também pode "finalizar" sua lista!').toLowerCase()
    if(addOrRemoveOption === "adicionar") {
        const product = prompt('Qual produto gostaria de adicionar?').toLowerCase()
        const category = prompt('Qual a categoria do produto? (frutas, laticínios, congelados ou doces)').toLowerCase()
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
    } else if(addOrRemoveOption === "remover") {
        alert(`• Lista de Compras • \n Frutas: ${fruit} \n Laticínios: ${dairyProduct} \n Congelados: ${frozen} \n Doces: ${candy}`)
        const product = prompt('Qual item gostaria de remover?').toLowerCase()
        if(fruit.includes(product)) {
            const productIndex = fruit.indexOf(product)
            fruit.splice(productIndex, 1)
            alert('Produto removido com sucesso!')
        } else if(dairyProduct.includes(product)) {
            const productIndex = dairyProduct.indexOf(product)
            dairyProduct.splice(productIndex, 1)
            alert('Produto removido com sucesso!')
        } else if(frozen.includes(product)) {
            const productIndex = frozen.indexOf(product)
            frozen.splice(productIndex, 1)
            alert('Produto removido com sucesso!')
        } else if(candy.includes(product)) {
            const productIndex = candy.indexOf(product)
            candy.splice(productIndex, 1)
            alert('Produto removido com sucesso!')
        } else {
            alert('Produto não encontrado')
        }
    } else if(addOrRemoveOption === "finalizar") {
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