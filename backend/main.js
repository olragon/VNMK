var app = require('express').createServer();

app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/vnmk', function(req, res){
  res.send('Viet Nam music killer server');
});

app.listen(3000);