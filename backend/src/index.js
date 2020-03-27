const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

/* Instalação do módulo de segurança CORS */
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333, function(){
    console.log("Server Activeted");
});

/*
    * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros paginação)
    * Route Params: Parâmetros utilizados para identificar recursos
    * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/ 

/*
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, SQL Server
    * NoSQL: MongoDB, CouchDB, Firebase
*/