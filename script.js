'use strict';

window.Game = {};

Game.correct = 0,
Game.progress = 0;
Game.max = 5;

Game.addProgress = function(num) {
	Game.progress += num;
	$('.progress').attr('value', Game.progress);
}

Game.start = function (name, max = Game.max) {
	$('.game').hide();
	$('.' + name).show();
	$('.progress').show();
	
	Game.correct = 0;
	Game.progress = 0;
	Game.max = max;

	$('.progress').attr( 'value', Game.progress);
	$('.progress').attr( 'max', max);
}

Game.playSound = function(status) {
	new Audio('sounds/' + status + '.mp3').play();
}

Game.showResult = function() {
	let status = Game.correct >= (Game.progress * 0.8) ? 'yay' : 'nay';
	let message = status == 'yay' ? "You Won!!!!" : "Better luck next time" ;

	$('.game').hide();
	$('#result .title').text(message);
	$('#result .score').html(Game.correct + "/" + Game.progress);
	$('img.result_img').attr('src', '/results/'+status+'.png');
	$('#result').show();

	Game.playSound(status);
}

window.shuffle = function(divClass) {
	var parent = $(divClass);
	var divs = parent.children();
	while (divs.length) {
    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
	}
}