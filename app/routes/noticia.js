// var noticias = require('./../../mockup')

const dbConnection = require('./../../config/dbConnection')

module.exports = function(app){
    app.get('/noticia', function(req, res){
        let id = req.query.id
        // console.log(id)
        var connection = dbConnection()
        connection.query('select * from noticias where id_noticia = $1', [id], function(error, result){
            // res.send(result.rows[0])
            res.render('noticias/noticia', {noticia: result.rows[0]})
        })
    })
}