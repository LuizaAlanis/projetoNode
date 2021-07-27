// para utilizar o banco de dados PostgreSQL
// npm install pg

const { Client } = require('pg')

// Na construção do nosso client, vamos passar como argumento um JSON com a URI do DB do Heroku
const client = new Client({
    connectionString: 'SUA URI DO HEROKU',
    ssl: {
        rejectUnauthorized: false
    }
})

client.connect()

function connectTeste() {
    client.query('select $1:: text as message', ['Olá mundo'], function(error, result){
        console.log(result.rows[0].message)
    })
}

connectTeste()

