import homeView from './views/homeproducts.js';
import productView from './views/productview.js';
import parseUrlAsObj from './utils.js';
import ErrorView from './views/errorview.js'



const routes = {
	'/':homeView,
	'/product/:id':productView

}

const router = async ()=>{
	const content = document.querySelector('#main-container')
	const urlAsObj = parseUrlAsObj();
	const activeUrl = (urlAsObj.resource?`/${urlAsObj.resource}` : '/') + 
	                   (urlAsObj.id?'/:id':'') +
	                   (urlAsObj.action?`/${urlAsObj.action}`:'');
    

    console.log(activeUrl)
	const activeView = routes[activeUrl]? routes[activeUrl] : ErrorView;

	content.innerHTML =  await activeView.render()
}


window.addEventListener('load',router)
window.addEventListener('hashchange',router)