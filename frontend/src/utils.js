const parseUrlAsObj = ()=>{
   const url = window.location.hash
    const request = url.split('/')

    return {
    	resource: request[1],
    	id:request[2],
    	action:request[3]
    }
}



export default parseUrlAsObj;