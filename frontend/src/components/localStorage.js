


const  saveCartItems =(cartItems)=>{
	localStorage.setItem('cartItems',JSON.stringify(cartItems))
}

const getCartItems = ()=>{
	const cartItems = 
	localStorage.getItem('cartItems')
	?JSON.parse(localStorage.getItem('cartItems'))
	:[];

	return cartItems
}




export  {getCartItems , saveCartItems}

