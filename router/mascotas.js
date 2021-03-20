const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render("mascotas", {
        arrayMascotas:[
            {id: "a", nombre: "res", descripcion: "descirpcion"},
            {id: "b", nombre: "res2", descripcion: "descirpcion2"},
        ]
    })
})

module.exports =router;

