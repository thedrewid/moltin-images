const MoltinGateway = require('@moltin/sdk').gateway;
const express = require('express');
const hbs = require('handlebars');

var app = express();

const Moltin = MoltinGateway({
  client_id: process.env.MOLTIN_CLIENT,
  client_secret: process.env.MOLTIN_SECRET,
});

//Register middleware
app.use('view_engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', req, res => {
  
});

app.listen(process.env.DEVELOPMENT_PORT);
console.log('server started on port ' + process.env.DEVELOPMENT_PORT)