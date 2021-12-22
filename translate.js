'use strict';
// Game.start('translate');

let phrases = {
	1: {en: "I am very happy", fr: "Je suis vraiment content",},
	2: {en: "J'aime coder javascript", fr: "I love to code javascript"},
	3: {en: "J'ai mangé mon diner", fr: "I ate dinner"},
	4: {en: "Nous avons eu un repas de trois plats", fr: "We had a three-course meal"},
	5: {en: "Brad est venu dîner avec nous", fr: "Brad came to dinner with us"},
	6: {en: "Il aime les tacos de poisson", fr: "He loves fish tacos"},
	7: {en: "En fin de compte, nous nous sommes tous sentis comme si nous mangions trop", fr: "In the end, we all felt like we ate too much"},
	8: {en: "Nous avons tous accepté; C'était une magnifique soirée", fr: "We all agreed; it was a magnificent evening"},
	9: {en: "Je veux voyager au Mexique", fr: "I wan to travel to Mexico"},
	10: {en: "Ne serait-il pas charmant de profiter d'une semaine tremper la culture", fr: "Wouldn’t it be lovely to enjoy a week soaking up the culture"},
	11: {en: "Oh, comment j'aimerais aller", fr: "Oh, how I’d love to go"},
	12: {en: "De tous les endroits où voyager, le Mexique est en tête de ma liste", fr: "Of all the places to travel, Mexico is at the top of my list"},
	13: {en: "Voulez-vous voyager avec moi", fr: "Would you like to travel with me"},
	14: {en: "L'apprentissage de la langue n'est-il pas", fr: "Isn’t language learning fun"},
	15: {en: "Il y a tellement de choses à comprendre", fr: "There is so much to understand"},
	16: {en: "J'aime apprendre!", fr: "I love learning!"},
	17: {en: "Phrases viennent dans de nombreuses formes et tailles", fr: "Sentences come in many shapes and sizes"},
	18: {en: "Rien ne bat une phrase complète", fr: "Nothing beats a complete sentence"}
},
en_words = [],
fr_words = [],
id = Math.floor(Math.random() * Object.keys(phrases).length) + 1;

function reset(){
	id = Math.floor(Math.random() * Object.keys(phrases).length) + 1;
	let choices = phrases[id].en.split(' ');

	$('.check').attr('disabled', true);
	$('.check').addClass('locked');
	$('.check').removeClass('success');
	$('.check').removeClass('failure');

	$('.translate .original').text(phrases[id].fr + '.');
	$('.choices').empty();
	$('.answer').empty();

	for( var choice of choices ) {
		$('.choices').append("<div id='"+choice+"' class='holder'><button class='choice'>"+choice+"</button></div>")
	}

	window.shuffle('.translate .choices');
}
reset();

function checkProgress() {
	setTimeout(function(){
		if( Game.progress == Game.max ) {
			Game.showResult();
		}else{
			reset();
		}
	}, 2000);
}

function checkAnswer(){
	let answer = $('.answer .choice'),
			phrase = [],
			status = 'failure';

	for( var choice of answer ){		
		phrase.push($(choice).text());
	}
	if( phrase.join(' ') == phrases[id].en ) {
		status = 'success';
		Game.correct += 1;
	}

	Game.addProgress(1);
	Game.playSound(status);
	$('.check').addClass(status);

	checkProgress();
}

function activateCheck(){
	let answer = $('.answer .choice');

	if(answer.length > 0){
		$('.check').attr('disabled', false);
		$('.check').removeClass('locked');
	}else{
		$('.check').attr('disabled', true);
		$('.check').addClass('locked');
	}
}

$(document).on('click', '.holder', function() {
	var holder = $(this);
	var choice = holder.find('.choice');

	holder.css('width', choice.width + 'px');
	holder.css('heigth', choice.heigth + 'px');

	choice.appendTo('.answer');
	activateCheck();
})

$(document).on('click', '.answer .choice', function() {
	$(this).appendTo( $('.holder#'+$(this).text()) );
	activateCheck();
})

$(document).on('click', '.check', function() {
	checkAnswer();
})