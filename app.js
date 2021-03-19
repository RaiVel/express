const express = require('express');
const bodyParser = require('body-parser');

const { datos, casa } = require('./datos');

const PORT = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

console.log(datos)
// app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.render("index", { titulo: "cambios en back" })
    // res.send("hola 2")
})

app.get('/servicios', (req, res) => {
    res.render("servicios", { servicios: "servicios" })
    // res.send("hola 2")
    //cambio
})

app.use((req,res,next) => {
    res.status(404).sendFile(__dirname + "/public/404.html")
})

app.listen(PORT, () => {
    console.log(`API REST CORRIENTO... http.//localhost:${PORT}`)
})


console.log(datos)