const dbConnection = require('./../../config/dbConnection')

module.exports = function(app){
    app.get('/formulario_inclusao', function(req, res){
        res.render('admin/form_add_noticia')
    })

    app.post('/noticias/salvar', function(req, res){
        // é configurar o express para receber o método POST
        // e para isso vamos inserir um parametro no arquivo server.js
        var {titulo, noticia} = req.body
        // console.log(`Titulo: ${titulo} e Notícia: ${noticia}`)
        var connection = dbConnection()

        connection.query('insert into noticias(titulo, noticia) values ($1, $2)', [titulo, noticia], function(error, result){
            // para remover as informações do corpo da página vindos do método POST
            // utilizamos o redirect
            res.redirect('/')
        })
    })
}