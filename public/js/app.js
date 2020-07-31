const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');

console.log(searchBar);
searchBar.addEventListener('keyUp', (e) => {
    console.log(e);
})
const loadCharacters = async () => {
    try {
        const res = await fetch('http://hp-api.herokuapp.com/api/characters');
        let hpCharacters = await res.json();
        displayCharacters(hpCharacters);
        console.log(hpCharacters);
    } catch (error) {
        console.log(error);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>${character.house}</p>
                <img src="${character.image}"  alt=""/>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();