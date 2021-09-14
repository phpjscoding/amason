import   {saveCartItems , getCartItems }  from '../components/localStorage.js';


const addToCart =(item,forceUpdate= false)=>{
  // get items from storage ,if there is none return []
  let cartItems = getCartItems()

// check if the product id in the storage is the same as the id of the product clicked on .
  const doesItemExist = cartItems.find(x => x.product === item.product);
  if(doesItemExist){
    
      cartItems =  cartItems.map(x=> x.product === doesItemExist.product?item:x);
  }else{
  	cartItems = [...cartItems,item]
  }

  saveCartItems(cartItems)
}


export default addToCart