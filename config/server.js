//Requisitando os módulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const consign = require('consign')

//Iniciando o objeto express
let app = express()

//configurando as engines
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.set('views', './app/views')

//configurando os midlwares
app.use(express.static('./app/public'))//para requisitar imagens, bootstrap e jquery
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Efetuando o auto-load das rotas
consign()
    .include('app/routes')
    .then('config/db_connection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app)

//exportando o módulo app
module.exports = app