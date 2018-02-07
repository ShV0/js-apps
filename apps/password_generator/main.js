
function random(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generate(lengthPassword) {

	var chars = 'ABCDEFGHIKLMNOPQRSTVXYZabcdefghiklmnopqrstvxyz1234567890-_',
		password = '';

	for(var i = 0; i < lengthPassword; i++) {
		let num = random(1,chars.length);
		password += chars.slice(num-1, num);
	}
	
	document.getElementById('result').innerHTML = password;
}