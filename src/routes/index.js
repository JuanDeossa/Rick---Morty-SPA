import header from '@templates/header';
import character from '@pages/character';
import error404 from '@pages/error404';
import home from '@pages/home';

//
import getHash from '@utils/getHash';
import resolveRoutes from '@utils/resolveRoutes';
//

const routes={
    "/":home,
    "/:id":character,
    "/contact":"Contact",
    "/about":"About",
}

const router= async ()=>{
    const headerSelector = document.getElementById("header") //null pending
    const contentSelector = document.getElementById("content") //null pending
    headerSelector.innerHTML= await header()
    let hash = await getHash()
    console.log(hash)
    let route = await resolveRoutes(hash)
    console.log(route);
    let render = routes[route]?routes[route]:error404
    console.log(render);
}

export default router;