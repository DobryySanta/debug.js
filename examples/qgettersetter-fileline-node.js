#!/usr/bin/env node

// get the class
var QGetterSetter	= QGetterSetter	|| require('../src/qgettersetter.js')

require('./helpers/qgettersetter-fileline.js');

(function blabla(){
	console.log('super', __FILE__, __LINE__, __FUNCTION__)	
})();
