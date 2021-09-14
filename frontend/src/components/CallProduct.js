
    const CallProduct = async (id)=>{
      
       try {
           const responsePromise = await axios({

            url:`http://localhost:3000/api/products/${id}`,
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            },
            
           })


           if(!responsePromise || responsePromise.statusText !== 'OK'){
                throw new Error(responsePromise.data.message)
            }

           return responsePromise.data

       } catch(e) {
           
           console.error(e);

           return {error:e.response.data.message || e.message}
       }

    }


export default CallProduct;