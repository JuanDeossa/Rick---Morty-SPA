const getAllCharacters=async()=>{
    const API = "https://rickandmortyapi.com/api/character"
    try {
        const response = await fetch(API)
        const data = await response.json()
        return data.results
    } catch (error) {
        console.log(error);
    }
}

export default getAllCharacters