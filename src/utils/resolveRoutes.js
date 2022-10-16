/*
possibilities:
    /
    [#/1/...#/999/]
    /#about/
*/

const resolveRoutes = (route)=>{
    if (route!=="/" && route.length<=3 ) {
        route = "/:id"
    }
    return route
}

export default resolveRoutes