/* import fetch from "node-fetch"; *///no se usa en una pagina web, sólo para uso de consola
const API = "https://rickandmortyapi.com/api";
const content = document.getElementById ('content');


async function fetchData (urlAPI) {
    const response = await fetch (urlAPI);
    const data = await response.json();
    console.log(data);
    return data;
}

(async () =>{
    try{
        const characters = await fetchData(`${API}/character`);
        let characterList = `
        ${characters.results.map(character => `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-2 pb-2">
                <div class="card">
                    <h5 class='pt-1 pb-1 bg-success'>${character.name}</h5>
                    <img src="${character.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text"><b>Status: </b>${character.status}</p>
                        <p class="card-text"><b>Gender: </b>${character.gender}</p>
                        <p class="card-text"><b>Species: </b>${character.species}</p>
                        <p class="card-text"><b>Location: </b>${character.location.name}</p>
                    </div>
                </div>
            </div>
            `).join('')}`;
            content.innerHTML = characterList;
    } catch (error){
        console.log(error);
    }
})();















/*  */


