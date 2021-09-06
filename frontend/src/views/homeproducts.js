//import axios from  "axios";
import Rating from '../components/rating.js'

const homeView= {
	
	render: async ()=>{

		const response= await axios({
            url:'http://localhost:3000/api/products',
            headers:{
            'Content-Type':'application/json',

            }
        })

        if(!response || response.statusText !== 'OK' ){
            return `<h3> Error in fetching products </h3>`
        }

        const products = response.data
		return `

             <ul class="products_ul">

                ${products.map(product=> 

                        ` <li class="product_li ">


                           <div class="product-img">
                              <a href="/#/product/${product.id}">
                                <img src="${product.image}" alt="${product.name}">
                              </a>
                           </div>
                           <div product-desc>
                              <h3 class="product-title">
                                <a href="/#/product/${product.id}">${product.name}</a>
                              </h3>
                              <p class="rating">
                                ${Rating.render({value:product.rating,numReviews:product.reviews})} 
                              </p>
                              
                              <p class="product-brand">
                                   ${product.brand}
                              </p>
                              <span class="product-price">
                                $ ${product.price}
                              </span>

                           </div>


                         </li>`


                	).join('')}


             </ul>



		`
	}
	
}


export default homeView