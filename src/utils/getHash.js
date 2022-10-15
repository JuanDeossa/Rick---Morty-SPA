/*
possibilities:
    /
    [#/1/...#/999/]
    /#about/
*/

const getHash = ()=>{
    let hash = location.hash
    hash=hash.replaceAll(/\/|#/g,"")
    if (!hash) {
        hash="/"
    }
    return hash
}

export default getHash