import homeView from './views/homeproducts.js';
import productView from './views/productview.js';
import parseUrlAsObj from './utils.js';
import ErrorView from './views/errorview.js';
import cartView from './views/cart.js';



const routes = {
	'/':homeView,
	'/product/:id':productView,
	'/cart/:id':cartView

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
	await productView.afterRender()
}


window.addEventListener('load',router)
window.addEventListener('hashchange',router)