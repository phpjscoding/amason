import urlAsObject from '../utils.js'
import callProduct from '../components/CallProduct.js'
import addToCart from '../components/addToCart.js'
import   {saveCartItems , getCartItems }  from '../components/localStorage.js';



const cartView ={


	afterRender:()=>{
		
		return 'after render '
	},


	render:async ()=>{

		const {id} = urlAsObject()
		if(id){
			const product = await callProduct(id);
			addToCart({
				product:product.id,
				name:product.name,
				price:product.price,
				countInStock:product.inStock,
				image:product.image,
				qty:1
			})
		}


  const cart = getCartItems();

		return `<div class="cart">
	  <div class="container">
	    <div class="grid_12">
	      <h1>Your Cart</h1>
	    </div>
	    <ul class="items">
	      ${ cart.length ===0? '<h3> Cart is empty <a href="#">Go shoping</a></h3>'
	        :cart.map(item=> ` 
              

              <li class="grid_4 item">
	        <a href="#" class="btn-remove">
	          <i class="fa fa-trash-alt"></i>
	        </a>
	        <div class="preview">
	          <img src="${item.image}" />
	        </div>
	        <div class="details" data-price="${item.price}">
	          <h3>
	            ${item.name}
	          </h3>
	          <p>Serves 4 (1480g)</p>

	        </div>
	        <div class="inner_container">

	          <div class="col_1of2 align-center picker">
	            <p>
	              <span  class="btn-quantity plus">
	                <i class="fa fa-plus"></i>
	              </span>
	            <div class="col_1of2 quantity-text">
	              <p><span class="current_quantity">1</span> @ ${item.price} $ </p>
	            </div>
	            <span href="#" class="btn-quantity minus">
	              <i class="fa fa-minus"></i>
	            </span>
	            </p>
	            <input type="hidden" class="quantity_field" name="quantity" data-price="15.50" value="1" />
	          </div>
	        </div>

	      </li>

	          `)}
	    </ul>

	   

	    <div class="grid_12 summary">
	      <div class="inner_container">
	        <div class="summary-content">
	        <div class="col_1of2 meta-data">
	          <div class="sub-total">
	            <em>Sub Total: </em><span class="amount"></span>
	          </div>
	          <div class="taxes">
	            <em>Plus VAT: </em><span class="amount">@ 20%</span>
	          </div>

	        </div>
	        <div class="col_1of2">
	          <div class="total">
	            <span class="amount"></span>
	          </div>
	        </div>
	        </div>
	        <div class="btn-summary">

	          <a href="./" class="btn-checkout btn-reverse">Continue Shopping</a>

	          <a href="#" class="btn-checkout">Checkout</a>

	        </div>
	      </div>
	    </div>
	  </div>
	</div>`

		
	}
}


export default cartView