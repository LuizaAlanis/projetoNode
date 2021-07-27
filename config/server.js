const express = require('express')

let app = express()

// define o motor de views como sendo o EJS
app.set('view engine', 'ejs')

//deve definir o caminho da pasta views
// o caminho deve ser feito a partir da chamada do modulo server
app.set('views', './app/views')

// define a pasta dos arquivos estáticos
app.use(express.static('./app/views/public'))

// configura o método Post da nossa aplicação
app.use(express.urlencoded({extended: true}))

const consign = require('consign')

//O consign vai fazer um scan em nossa aplicação
//e vai inserir as rotas no nosso app
consign().include('./app/routes').into(app)

module.exports = app
