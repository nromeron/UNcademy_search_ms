const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const db = require('./models/index')
const cors = require('cors')
var shell = require("shelljs");

async function updateDatabase() {
     await db.sequelize.sync({ force: true }).then(() => {
        console.log('yes re-sync done!');
})
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

const http = require('http');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }))

//require("./routes")(app);

app.get('/', (req, res) => res.status(200).send({
     message: 'Bienvenido a alguna mierda',
}));
const port = parseInt(process.env.PORT, 10) || 8080;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
app.use(logger('dev'));
module.exports = app;