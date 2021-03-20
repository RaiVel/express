const express = require('express');

const { datos, casa } = require('./datos');

const PORT = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + "/public"));
app.use('/', require('./router/index'));
app.use('/mascotas', require('./router/mascotas'));
app.use((req,res,next) => {
    res.status(404).render("404", {error: "pagina erronea"} )
})


app.listen(PORT, () => {
    console.log(`API REST CORRIENTO... http.//localhost:${PORT}`)
})