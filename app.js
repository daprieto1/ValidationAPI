const express = require('express');
const app = express();
const expressSwagger = require('express-swagger-generator')(app);

var basePath = '/v2';
let options = {
    swaggerDefinition: {
        info: {
            description: 'This is a sample server',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: 'validationapi-v2.herokuapp.com',
        basePath: basePath,
        produces: [
            "application/json"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: __dirname, //app absolute path
    files: ['./routes/**/*.js'] //Path to the API handle folder
};
expressSwagger(options)

var users = require('./routes/users');
var temperature = require('./routes/temperature');

app.use(`${basePath}/users`, users);
app.use(`${basePath}/temperature`, temperature);

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening!');
});