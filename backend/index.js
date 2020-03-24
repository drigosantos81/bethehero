const express = require('express');

const app = express();

app.use(express.json());

/*
    * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros paginação)
    * Route Params: Parâmetros utilizados para identificar recursos
    * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/ 

app.post('/users', function(request, response) {
    const body = request.body;

    console.log(body);
    
    return response.json({ 
        evento: 'Semana Omnistack 11.0',
        aluno: 'Rodrigo Santos'
     });
});

app.listen(3333, function(){
    console.log("Server Activeted");
});