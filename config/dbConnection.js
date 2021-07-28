const { Client } = require('pg')

// Na construção do nosso client, vamos passar como argumento um JSON com a URI do DB do Heroku
const client = new Client({
    connectionString: process.env.DATABASE_URL || 'postgres://uawbneptekuybv:8c6f329e3b2319129b1e08cb27cc8611f57a74ac03eca20207da43c37bbfbee6@ec2-34-233-114-40.compute-1.amazonaws.com:5432/dcga31bquksr17',
    ssl: {
        rejectUnauthorized: false
    }
})

client.connect()

module.exports = function(){
    return client
}