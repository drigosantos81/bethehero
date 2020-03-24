const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

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