const getSingleCharacterByID =async(id)=>{
    const API = `https://rickandmortyapi.com/api/character/${id}`
    try {
        const response = await fetch(API)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

export default getSingleCharacterByID