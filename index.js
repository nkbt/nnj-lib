var sharedLib = require('shared');
sharedLib.sayYes(true);

function alwaysYes() {
	return sharedLib.say();
}

exports.alwaysYes = alwaysYes;
