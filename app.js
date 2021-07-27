// PACOTES INSTALADOS NA APLICAÇÃO
// npm install express
// npm install -g nodemon
// npm install ejs
// npm install consign
// npm install pg

let app = require('./config/server')

// chamada da rota modulada
// let rotaHome = require('./app/routes/home')(app)

// let rotaNoticias = require('./app/routes/noticias')(app)

// let rotaNoticia = require('./app/routes/noticia')(app)

// let rotaFormulario = require('./app/routes/admin')(app)

// as rotas agora são executadas pelo modulo consign

app.listen(3000, function(){
    console.log('Servidor rodando com express')
    console.log('Pressione CTRL+C para encerrar')
})