'use strict';
// Game.start('pairing');

let pairs = {
	1: { fr:"pomme", en: "apple"},
	2: { fr:"livre", en: "book"},
	3: { fr:"Etudiant", en: "student"},
	4: { fr:"voiture", en: "car"},
	5: { fr:"film", en: "movie"},
	6: { fr:"bateau", en: ["boat", "ship"]},
	7: { fr:"million", en: "million"},
	8: { fr:"sac", en: ["bag", "sack"]},
	9: { fr:"impossible", en: "impossible"},
	10: { fr:"seconde", en: ["second", "moment"]},
	11: { fr:"bête", en: ["stupid", "silly"]},
	12: { fr:"découvrir", en: ["to discover", "find"]},
	13: { fr:"erreur", en: ["error", "mistake"]},
	14: { fr:"soleil", en: ["sun", "sunlight"]},
	15: { fr:"voyage", en: ["trip", "journey"]},
	16: { fr:"sauter", en: "to jump"},
	17: { fr:"rêver", en: "to dream"},
	18: { fr:"détester", en: ["to hate", "detest"]},
	19: { fr:"clair", en: ["clear", "apparent"]},
	20: { fr:"faux", en: ["wrong", "false", "fallacious"]},
	21: { fr:"paraître", en: ["to come out", "be published"]},
	22: { fr:"balle", en: "ball"},
	23: { fr:"empêcher", en: "to prevent"},
	24: { fr:"maintenir", en: ["to keep", "maintain"]},
	25: { fr:"cheveu", en: "hair"},
	26: { fr:"papier", en: "paper"},
	27: { fr:"présent", en: ["a present", "present", "current"]},
	28: { fr:"sujet", en: ["subject", "topic", "theme"]},
	29: { fr:"supposer", en: ["to suppose", "assume"]},
	30: { fr:"tranquille", en: ["quiet", "calm"]},
	31: { fr:"neuf", en: ["nine", "new", "unused"]},
	32: { fr:"épouser", en: ["to marry", "to espouse"]},
	33: { fr:"blanc", en: ["white", "blank"]},
	34: { fr:"table", en: "table"},
	35: { fr:"toute", en: ["everything", "all"]},
	36: { fr:"dix", en: ["ten", "tenth"]},
	37: { fr:"clé", en: ["key", "solution"]},
	38: { fr:"agent", en: ["officer", "oficial", "agent"]},
	39: { fr:"approcher", en: "to approach"},
	40: { fr:"sens", en: ["direction", "way", "meaning", "sense", "senses"]},
	41: { fr:"craindre", en: ["to fear", "to be afraid of"]},
	42: { fr:"six", en: "six"},
	43: { fr:"message", en: "message"},
	44: { fr:"crier", en: "to shout"},
	45: { fr:"salle", en: ["room", "hall", "audience"]},
	46: { fr:"inviter", en: "to invite"},
	47: { fr:"effet", en: ["effect", "impression"]},
	48: { fr:"réfléchir", en: ["to reflect", "think"]},
	49: { fr:"espèce", en: ["species", "kind"]},
	50: { fr:"arranger", en: ["to arrange", "to organize"]},
	51: { fr:"naître", en: "to be born"},
	52: { fr:"allô", en: "Hello"},
	53: { fr:"bois", en: ["wood", "antlers"]},
	54: { fr:"propos", en: ["subject", "topic", "remark", "point"]},
	55: { fr:"camp", en: "camp"},
	56: { fr:"sorte", en: ["sort", "kind"]},
	57: { fr:"hôtel", en: "hotel"},
	58: { fr:"début", en: "beginning"},
	59: { fr:"souffrir", en: ["to be in pain", "suffer"]},
	60: { fr:"jambe", en: "leg"},
	61: { fr:"remercier", en: "to thank"},
	62: { fr:"choix", en: ["choice", "selection"]},
	63: { fr:"sécurité", en: ["safety", "security"]},
	64: { fr:"avocat", en: "lawyer"},
	65: { fr:"attraper", en: "to catch"},
	66: { fr:"client", en: ["customer", "client", "guest"]},
	67: { fr:"courant", en: ["current", "trend"]},
	68: { fr:"dépêcher", en: "to dispatch"},
	69: { fr:"peuple", en: "people"},
	70: { fr:"dame", en: ["lady", "queen"]},
	71: { fr:"vérifier", en: ["to check", "verify"]},
	72: { fr:"abandonner", en: ["to abandon", "leave", "desert"]},
	73: { fr:"journal", en: ["newspaper", "diary", "journal"]},
	74: { fr:"sérieux", en: ["genuine", "serious"]},
	75: { fr:"brûler", en: "to burn"},
	76: { fr:"or", en: "gold"},
	77: { fr:"loi", en: ["law", "rule"]},
	78: { fr:"fond", en: ["bottom", "back"]},
	79: { fr:"gosse", en: "kid"},
	80: { fr:"fric", en: ["doug", "money", "cash"]},
	81: { fr:"situation", en: " location"},
	82: { fr:"sauf", en: "except"},
	83: { fr:"accident", en: "accident"},
	84: { fr:"doute", en: "doubt"},
	85: { fr:"scène", en: "scene"},
	86: { fr:"soldat", en: "soldier"},
	87: { fr:"amoureux", en: "loving"},
	88: { fr:"assurer", en: ["to assure", "insure"]},
	89: { fr:"preuve", en: ["proof", "evidence"]},
	90: { fr:"humain", en: "human"},
	91: { fr:"mer", en: ["sea", "seaside"]},
	92: { fr:"silence", en: "silence"},
	93: { fr:"télé", en: ["TV", "telly"]},
	94: { fr:"victime", en: ["victim", "casualty"]},
	95: { fr:"complètement", en: ["completely", "fully", "in depth"]},
	96: { fr:"pute", en: "whore"},
	97: { fr:"garde", en: ["guard", "carer", "nurse"]},
	98: { fr:"meurtre", en: "murder"},
	99: { fr:"groupe", en: "group"},
	100: { fr:"crime", en: "crime"},
	101: { fr:"traiter", en: ["to treat", "to deal"]},
	102: { fr:"doucement", en: ["gently", "softly"]},
	103: { fr:"blesser", en: ["to injure", "wound", "hurt"]},
	104: { fr:"colonel", en: "colonel"}
},
pair = {};


for( let x in [...Array(Game.max).keys()] ){
	let id = Math.floor(Math.random() * 104) + 1;

	let	random_pair = pairs[id],
			random_en = typeof(random_pair.en) === 'object' ? random_pair.en[Math.floor(Math.random() * random_pair.en.length)] : random_pair.en;

	$('.pairing .en').append("<button data-lang='en' id='en-"+id+"' class='pair btn-en'>"+random_en+"</button>");
	$('.pairing .fr').append("<button data-lang='fr' id='fr-"+id+"' class='pair btn-fr'>"+random_pair.fr+"</button>");
}

function activatePair(pair){
	for(var lang in pair) {
		if(lang == 'id') continue;
		var btn = pair[lang];
		btn.addClass('selected');
	}
}

window.shuffle('.pairing .en');
window.shuffle('.pairing .fr')

function deActivateButtons(status){
	$('.pair.selected').addClass(status);
	pair = {};

	setTimeout(function() {
		$('.pair').removeClass("selected");
	}, 200);
	
	setTimeout(function() {
		$('.pair.' + status).attr("disabled", true);
		$('.pair.' + status).addClass("locked");
	}, 1000);
}

function objectsAreTheSame(source, choice) {
	let matches = 0;
	if(source['fr'] === choice['fr'].text()) { matches += 1; }
	if(source['en'].includes(choice['en'].text())) { matches += 1; }
	return matches == 2;
}

function checkPair(pair) {
	var status = 'failure';
	if(objectsAreTheSame(pairs[pair.id], pair)) {
		status = 'success';
		Game.correct += 1;
	}
	Game.addProgress(1);
	Game.playSound(status);
	return status;
}

$(document).on('click', '.pair', function() {
	$('.btn-' + $(this).data('lang')).removeClass('selected');
	pair["id"] = parseInt($(this).attr('id').split('-')[1]);
	pair[$(this).data('lang')] = $(this);

	activatePair(pair);

	if( 'en' in pair && 'fr' in pair ) {
		let status = checkPair(pair);
		deActivateButtons(status);
		
	}
	
	if( Game.progress === Game.max ) {
		setTimeout(function(){
			Game.showResult();
		}, 2000);
	}
})

function data(){
	console.log("Pair:", pair);
	console.log("Correct:", Game.correct);
	console.log("Progress:", Game.progress);
}