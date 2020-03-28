

/* 
Rotas/recurso

*/ 
/*
*   GET: Buscar uma informação do back-end
*   POST: Criar uma informação no back-end
*   PUT: Alterar uma informação  no back-end
*   DELETE: Deletar uma informação no back-end
*
*/

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?"
 * Route Params: Parâmetros ultilizados para identificar recursos
 * Request body: Corpo da requisição
 */
/**
 * SQL: MySQL, SQLite, PostgreSQL, ORACLE, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/** para comunicar com o banco de dados:
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */


const express = require('express');
const routes = require('./routes')
const cors = require('cors')

const app = express();


app.use(cors());
app.use(express.json())//Para converter as requisições para json
app.use(routes)

app.listen(3333);