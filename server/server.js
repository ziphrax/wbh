var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io')(server),
    connection = require('./controller/connection'),
    morgan = require('morgan');

var port = 3000;

app.use(morgan('short'));
app.use('/',express.static('../client'));

io.on('connection', connection.handleConnection);

var s = server.listen(port,function(){
  console.log("WBH Server started on port %s",port);
});

exports.closeServer = function(){
  s.close();
};
