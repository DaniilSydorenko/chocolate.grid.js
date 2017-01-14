'use strict';

var Chocolate = require('./Chocolate.js');


// Init Chocolate

var chocolate = new Chocolate(
	'js-chocolate',
	'js-tile',
	1200,
	250
);


// Init Style

chocolate.setStyle();


// Set listeners !!!

window.addEventListener('resize', function(){
	//console.log(window.innerWidth);
	//console.log(chocolate._containerWidth);
});


