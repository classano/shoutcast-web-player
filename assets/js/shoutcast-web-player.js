sWebPlayer = (function(){});
	
sWebPlayer.prototype.play = function(){
	this.pauseElement.show();
	this.playElement.hide();
	this.playerID.play();
	this.setPlayerStatus('<i class="fa fa-music fa-pulse"></i>');
};
sWebPlayer.prototype.pause = function(){
	this.pauseElement.hide();
	this.playElement.show();
	this.playerID.pause();
	this.setPlayerStatus('<i class="fa fa-spinner fa-pulse"></i>');
};

sWebPlayer.prototype.setPlayerStatus = function(status){
	this.statusElement.html(status);
};