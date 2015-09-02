$(function(){
	var thePlayer = new sWebPlayer();
	$('#s-web-player-btn-play').on('click',function(){
		thePlayer.play();
	});
	$('#s-web-player-btn-pause').on('click',function(){
		thePlayer.pause();
	});
	thePlayer.playerID 			= $('#s-web-player')[0];
	thePlayer.statusElement 	= $('#s-web-player-status');
	thePlayer.pauseElement 		= $('#s-web-player-btn-pause');
	thePlayer.playElement 		= $('#s-web-player-btn-play');
	thePlayer.play();
});