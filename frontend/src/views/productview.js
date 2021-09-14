 import parseUrlAsObj from '../utils.js';
 import callProduct  from "../components/CallProduct.js";
 import Rating from '../components/rating.js';
 
const productView = {

	


	render: async ()=>{

		const {id} = await parseUrlAsObj()
		const product =  await callProduct(id)
		
		   if(product.error){
		   	return `<i>${product.error}</i>`
		   }

		  return `<div class="product-details">
		<div class="product-image">
		    <a href="/" class="back-to-result">back to results</a>
			<img src="${product.image}" alt="${product.name}">
		</div>
		<div class="product-info">
			<h2 class="product-title">${product.name}</h2>
			  <p class="rating">
                                ${Rating.render({value:product.rating,numReviews:product.reviews})} 
                              </p>
			<p class="product-price">$${product.price}</p>
			<div class="product-description"></div>
		</div>
		<div class="product-cart">
			<span>Price:$${product.price}</span>
			<span>In Stock:${product.inStock}</span>
			<button class="add-to-cart">Add to cart</button>
		</div>
	</div>`
		
	},
	afterRender:async ()=>{
		const {id} = await parseUrlAsObj();

		const btn = document.querySelector('.add-to-cart');
		
		if(btn){
			btn.addEventListener('click',()=>{
			document.location.hash = `/cart/${id}`;
		})

	}
		}


}


export default productView;