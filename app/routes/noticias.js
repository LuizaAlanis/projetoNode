// var noticias = require('./../../mockup')

const dbConnection = require('./../../config/dbConnection')

module.exports = function(app){
    app.get('/noticias', function(req, res){
        var connection = dbConnection()
        // aqui fazemos a consulta ao banco de dados do HEROKU POSTGRESQL
        connection.query('select * from noticias', function(error, result){
            // res.send(result)
            res.render('noticias/noticias', {noticias: result.rows})
            
        })
    })
}