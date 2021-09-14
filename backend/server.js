import data from './data.js'
import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.get('/api/products',(req,res)=>{
   res.send(data.products)
})



app.get("/api/products/:id",(req,res)=>{
   const product = data.products.find(x=> x.id == req.params.id)
  if(product){
    res.send(product)
 } else{
   res.status(404).send({message:'Error when fetching products'})
 }
})





app.listen(3000,()=>{console.log('server is running on port 3000')})