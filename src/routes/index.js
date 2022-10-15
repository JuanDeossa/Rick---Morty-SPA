import header from '@templates/header';
import character from '@pages/character';
import error404 from '@pages/error404';
import home from '@pages/home';

//
import getHash from '@utils/getHash';
//

const routes={
    "/":home,
    "/:id":character,
    "/contact":"contact"
}

const router= async ()=>{
    const headerSelector = document.getElementById("header") //null pending
    const contentSelector = document.getElementById("content") //null pending
    headerSelector.innerHTML= await header()
    console.log(getHash())
}

export default router;