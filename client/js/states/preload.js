var preload = function(game){}

preload.prototype = {
	preload: function(){
    this.game.load.image("btn_play","assets/buttons/play_game.png");
    this.game.load.image("btn_exit","assets/buttons/exit_game.png");
    this.game.load.image("bg_title","assets/backgrounds/title.png");
  /*  var loadingBar = this.add.sprite(160,240,"loading");
    loadingBar.anchor.setTo(0.5,0.5);
    this.load.setPreloadSprite(loadingBar);
		this.game.load.spritesheet("numbers","assets/numbers.png",100,100);*/
	},
  	create: function(){
		this.game.state.start("GameTitle");
	}
}
