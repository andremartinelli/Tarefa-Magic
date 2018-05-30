const cartinhas = 'https://api.magicthegathering.io/v1/cards'

function criaCarta(nome, desc, URLimg, tit, i) {
    let newRow = document.createElement('div')
    newRow.classList.add('row')
    let newCol = document.createElement('div')
    newCol.classList.add('col-sm')
    let newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.style = 'width: 18rem'
    let imagem = document.createElement('img')
    imagem.classList.add('card-img-top')
    imagem.src = URLimg
    let conteudo = document.createElement('div')
    conteudo.classList.add('card-body')
    let titulo = document.createElement('h5')
    titulo.classList.add('card-title')
    titulo.appendChild(document.createTextNode(tit))
    var de = document.createElement('p')
    de.classList.add('card-text')
    de.appendChild(document.createTextNode(desc))
    conteudo.appendChild(titulo)
    conteudo.appendChild(de)
    newCard.appendChild(conteudo)
    newCard.appendChild(imagem)
    newCol.appendChild(newCard)
    newRow.appendChild(newCol)
    var insere = document.getElementById('carta')
    insere.appendChild(newCol)
}

function cartas(elemento, index, array) {
    criaCarta(array[index].name, array[index].originalText, array[index].imageUrl, array[index].originalType)
}

fetch(cartinhas, {
    method: 'get'
})
    .then(response => response.json())
    .then(function (jsonrsp) {
        jsonrsp.cards.forEach(cartas)
    })
    .catch(function (err) {
        console.error(err)
    })
