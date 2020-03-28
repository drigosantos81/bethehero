const app = require('./app');

app.listen(process.env.PORT || 3333, function(){
        console.log("Server Activeted");
    });

    // app.listen(3333);