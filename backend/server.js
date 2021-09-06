import data from './data.js'
import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.get('/api/products',(req,res)=>{
   res.send(data.products)
})



app.listen(3000,()=>{console.log('server is running on port 3000')})