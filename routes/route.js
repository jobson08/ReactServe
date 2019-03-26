const routes = require("express").Router();

routes.get("/", (req, res) =>{
    return res.json({Ola:'Mundo'});
});

module.exports = routes;