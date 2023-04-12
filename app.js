const express = require('express')
const app = express()


// middleware
app.use(express.json())
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// get request
const placesController = require('./controllers/places')
app.use('/', placesController)

const port = 5000
app.listen(port, console.log('server is listening on port ' + port))