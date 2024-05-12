require('dotenv').config()

const express = require('express')
const app = express()
// const port = 3000
const port = process.env.PORT
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/husain' , (req ,res) =>{
    res.send('my name is husain')
})

app.get('/login' , (req , res)=>{
    res.send('<h1> Please login first !! </h1>')
})

app.listen(port , () => {
  console.log(`Example app listening on port ${port}`)
})