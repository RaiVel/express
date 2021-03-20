const express = require('express');
const bodyParser = require('body-parser');

const { datos, casa } = require('./datos');

const PORT = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.render("index", { titulo: "cambios en back" })
})

app.get('/servicios', (req, res) => {
    res.render("servicios", { servicios: "servicios" })
})

app.use((req,res,next) => {
    res.status(404).render("404", {error: "pagina erronea"} )
})

app.listen(PORT, () => {
    console.log(`API REST CORRIENTO... http.//localhost:${PORT}`)
})


console.log(datos)