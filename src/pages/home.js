import getAllCharacters from '@utils/getAllCharacters';

const home = async()=>{
    const characters = await getAllCharacters()
    const view =`
        <div class="characters">
            ${characters.map(character=>`
            <article class="character-item">
                <a href="#/${character.id}/">
                    <img src="${character.image}" alt="${character.name}">
                    <h2>${character.name}</h2>
                </a>
            </article>
            `).join("")}
        </div>`;
    return view;
}

export default home;