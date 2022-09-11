const express = require('express')
const bodyParser = require('body-parser');
const db = require('./models/index.js')
const cors = require('cors')
var shell = require("shelljs");

async function updateDatabase() {
    await db.sequelize.sync({ force: true });
}
var argumentsArr = process.argv

async function update() {
    await updateDatabase();
    shell.exec("npx sequelize-cli db:seed:all");
    console.log("Models updated");
    process.exit()
}
if (argumentsArr[2] == "updateDatabase") {
    update();
}

const app = express()

app.use(express.json())
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))


// routers
const sedeRouter = require('./routes/sedeRouter')
app.use('/buscador', sedeRouter)


//port

app.get("/", (req,res) =>{
    res.json({message: 'funciona carajoooo'})
})

const PORT = process.env.PORT || 8080

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})