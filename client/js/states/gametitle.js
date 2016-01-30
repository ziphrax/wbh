var gameTitle = function(game){}

gameTitle.prototype = {
  create: function(){
    this.game.add.image(0, 0, 'bg_title').anchor.set(0);
    var playButton = this.game.add.button(this.game.world.centerX,this.game.world.centerY,"btn_play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
    this.game.add.text(2,2,'state: gameTitle',{font:'10px Arial',fill:'#ffcc00'});
	},
	playTheGame: function(){
    console.log("%c Starting New Game... ", "color:white; background:green");
		this.game.state.start("TheGame");
	}
}
