const resultAnime = document.querySelector(".anime");




fetch('/data/data.json')
    .then(myData => myData.json())
    .then(anime => showOnWeb(anime));


function showOnWeb(anime) {
    console.log(anime);

    const random = document.createElement("div");
    random.classList.add("row");

    for (let i = 0; i < anime.length; i++) {
        const element = anime[i];
        random.innerHTML +=
            `
        <div class="col-md-4">
        <div class="card">
          <img class="card-img-top" src="${element.image}">
          <div class="card-body">
            <h4 class="card-title">${element.title}</h4>
            <p class="card-text">rank: ${element.rank}</p>
            <p class="card-text">score: ${element.score}</p>
            <p class="card-text">year: ${element.year}</p>
            <p class="card-text">Genre: ${element.genre}</p>
          </div>
          </div>
        </div>`;

        resultAnime.append(random);
        console.log("for loop");
    }

    // resultAnime.append(random);

}