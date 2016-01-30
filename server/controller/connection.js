module.exports =  {
  handleConnection: function (socket){
    var addedUser = false;

    console.log('New client socket connection established.')
    socket.emit('msg', 'Successfully Connected.');
    socket.broadcast.emit('msg', 'another user has connected.' );

    socket.on('disconnect', function () {
      console.log('A client socket has disconnected.');
      socket.broadcast.emit('msg', 'another user disconnected.');
    });
  }
}
