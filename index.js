var sharedLib = require('nnj-shared');
sharedLib.sayYes(true);

function alwaysYes() {
	return sharedLib.say();
}

exports.alwaysYes = alwaysYes;
