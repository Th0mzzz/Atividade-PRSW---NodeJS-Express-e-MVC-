var mysql = require('mysql2')
const dotenv = require('dotenv');
dotenv.config();

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

pool.getConnection((error, conn) => {
    error ? console.log(error) : console.log("conectado ao SGBD!")
});

module.exports = pool.promise()

// module.exports = function () {
//       try {
//           let conexao = mysql.createConnection({
//               host: process.env.HOST,
//               user: process.env.USER,
//               password: process.env.PASSWORD,
//               database: process.env.DATABASE,
//               port: process.env.PORT
//           });
//           console.log('Conexão estabelecida!')
//           return conexao;
//       }catch(errors){
//           console.log(errors)
//           console.log('Falha ao estabelecer conexão!')
//           return null
//       }
//  }
