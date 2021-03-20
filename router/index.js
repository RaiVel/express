const express= require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("index", { titulo: "cambios en back" })
})

router.get('/servicios', (req, res) => {
    res.render("servicios", { servicios: "servicios" })
})

module.exports= router;