// inclui o arquivo de base de dados
// caminho tem que ser saindo da pasta routes e da pasta app
// var noticias = require('./../../mockup')
// vamos passar atravez de um JSON o conteúdo da variável noticias
// e usar o metodo slic para pegar somente as três primeiras noticias da lista

const dbConnection = require('./../../config/dbConnection')

module.exports = function(app){
    app.get('/', function(req, res){
        var connection = dbConnection()
        connection.query('select * from noticias order by id_noticia desc limit 3', function(error, result){
            // res.send(result.rows)
            // O engine EJS vai ser o responsavel pela renderização das páginas HTML
            res.render('home/index', {noticias: result.rows})
        })
    })
}
