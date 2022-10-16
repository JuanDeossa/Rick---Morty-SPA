import getHash from "@utils/getHash";
import getSingleCharacterByID from "@utils/getSingleCharacterByID ";

const character = async()=>{
    const id = getHash()
    console.log(id);
    const character = await getSingleCharacterByID(id)
    const view =/*html*/`
        <div class="characters-inner">
            <article class="characters-card">
                    <img src=${character.image} alt=${character.name}>
                    <h2>${character.name}</h2>
            </article>
            <article class="characters-card">
                    <h3>Episodes: ${character.episode.length}</h3>
                    <h3>Status: ${character.status}</h3>
                    <h3>Species: ${character.species}</h3>
                    <h3>Gender: ${character.gender}</h3>
                    <h3>Origin: ${character.origin.name}</h3>
                    <h3>Last Location: ${character.location.name}</h3>
            </article>
        </div>`;
    return view;
}

export default character;