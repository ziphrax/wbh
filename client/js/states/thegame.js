var theGame = function(game){
  var self = this;

  self.socket = null;

  return self;
}

theGame.prototype = {
  create: function(){

    var last5Chats = [];
    var chatCount = 1;
    var chatText = null;

    this.game.add.image(0, 0, 'bg_title').anchor.set(0);
    var exitButton = this.game.add.button(this.game.world.centerX,this.game.world.centerY,"btn_exit",this.exitGame,this);
    exitButton.anchor.setTo(0.5,0.5);
    this.game.add.text(2,2,'state: theGame',{font:'10px Arial',fill:'#ffcc00'});
    chatText = this.game.add.text(2,20,'',{font:'10px Arial',fill:'#ffcc00'});

    //temp to test
    this.socket = io();
    this.socket.on('msg',function(message){
      if(last5Chats.length > 4){
        last5Chats.shift();
      }
      last5Chats.push(message);
      var chatLog = "";
      last5Chats.forEach(function(element, index, array){
        chatLog  = chatLog + element + '\n';
      });
      chatText.setText(chatLog);
    });
	},
  exitGame: function(){
    console.log("%c Game Over! ", "color:white; background:red");
    this.socket.disconnect();
    this.game.state.start("GameOver");
  }
}
