const clc = require("cli-color");
const beep = require('beepbeep')
const term = require( 'terminal-kit' ).terminal ;

beep()
console.log(clc.red('Wait 2 sec please...'))

term.slowTyping(
	'Loading........\n' ,
	{ flashStyle: term.brightWhite } ,
	function() { process.exit() ; }
) ;


function helloFromYellow() {
    console.log(clc.yellow('Hello! I am yellow notifyer!!!'))
    beep()
}
setTimeout(helloFromYellow, 2000)//Почему-то не могу установить более длительный таймаут - не работает>>>







