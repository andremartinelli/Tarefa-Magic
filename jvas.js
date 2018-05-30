const cartinhas = 'https://api.magicthegathering.io/v1/cards'

function criaCarta(nome, desc, URLimg, tit, i){
    var newRow = document.createElement('div')
    newRow.classList.add('row')
    var newCol = document.createElement('div')
    newCol.classList.add('col-sm')
    var newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.style="width: 18rem;"
    var imagem = document.createElement('img')
    imagem.classList.add('card-img-top')
    imagem.src = URLimg
    var conteudo = document.createElement('div')
    conteudo.classList.add('card-body')
    var titulo = document.createElement('h5')
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



fetch(cartinhas, {
  method: 'get' 
})
.then(function(response) { 
    return response.json()
})
.then(function(jsonrsp) {
    for(var i = 0; i < jsonrsp.cards.length; i++) {
        criaCarta(jsonrsp.cards[i].name, jsonrsp.cards[i].originalText, jsonrsp.cards[i].imageUrl, jsonrsp.cards[i].originalType)
    }
}) 
.catch(function(err) { 
  console.error(err)
});
