console.log('JS loaded!');

const cryptoCards = document.querySelector('.crypto-cards');

fetch(`https://api.coincap.io/v2/assets`)
    .then(myData => myData.json())
    .then(jsonData => showAllCrypto(jsonData));

function showAllCrypto(jsonData) {
    console.log(jsonData)
    for (let i = 0; i < jsonData.data.length; i++) {
        const crypto = jsonData.data[i];
        cryptoCards.appendChild(createCard(crypto,i))
        console.log(crypto)
    }
}

function createCard(crypto,count) {
    const col = document.createElement('div');

    col.classList.add('col-md-3','mt-4');

    const card = document.createElement('div');

    card.classList.add('card');

    const img = document.createElement('img');

    img.classList.add('card-img-top');
    if (count <10){
        img.src = 'img/' +  crypto.symbol + '.jpg';
    } else {
        img.src = 'img/not-found.jpg';
    }
    const cardBody = document.createElement('div');

    cardBody.classList.add('card-body');

    const h4 = document.createElement('h4');

    h4.textContent = crypto.name;
    console.log(crypto.name)

    h4.classList.add('card-title');
    h4.classList.add('text-dark');
    h4.classList.add('text-center');

   

    const p = document.createElement('p');
    p.textContent = crypto.rank

    const link = document.createElement('p');
    link.textContent = `Link = `+ crypto.explorer  

    const price = document.createElement('p');
    price.textContent = `price = `+ crypto.priceUsd

    const supply = document.createElement('p');
    supply.textContent = `supply = `+ crypto.supply

    p.classList.add('card-text');

    col.appendChild(card);
    card.appendChild(img);
    card.appendChild(cardBody);
    cardBody.appendChild( price);
    cardBody.appendChild( supply);
    cardBody.appendChild( link);
    cardBody.appendChild(h4);
    cardBody.appendChild(p);
  
  

    return col
}

console.log(`fdfdf`)