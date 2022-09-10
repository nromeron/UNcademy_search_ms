const express = require('express')
const cors = require('cors')
const http = require('http');
const bodyParser = require('body-parser');


const app = express()


app.use(express.json())
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))


// routers
const router = require('./routes/router.js')
app.use('/buscador', router)


//port

app.get("/", (req,res) =>{
    res.json({message: 'funciona carajoooo'})
})

const PORT = process.env.PORT || 8080

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})