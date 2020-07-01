//criando servidor 
const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

//configurando css
server.use(express.static('public'))



server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
})

//criando rota

server.get("/", (req, res) => {
    return res.render('index')
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id;
  
    return res.send(`O id fornecido na rota é: ${id}`);
  });

server.get("/conteudo", (req, res) => {
    return res.render("conteudo")
})

server.get("/sobre", (req, res) => {
    return res.render("sobre")
})

server.use(function(res, res){
    res.status(404).render("not-found")
})

server.listen(5000, function(){
    console.log("running server")
})