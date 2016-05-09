var app = require('koa')();
var static = require('koa-static');

app.use(static(__dirname+'/public'));

app.listen(3000);