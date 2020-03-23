const express = require('express');

const app = express();

app.get('/', function(request, response) {
    return response.json({ 
        evento: 'Semana Omnistack 11.0',
        aluno: 'Rodrigo Emanuel'
     });
});

app.listen(3333);