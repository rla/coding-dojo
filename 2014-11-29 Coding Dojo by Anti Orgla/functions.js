var fs = require('fs');

var lines = exports.lines = function(file) {
	
	return fs.readFileSync(file).toString().split(/\r?\n/);
	
};

var splitLines = exports.splitLines = function(file, regexp) {
	
	return lines(file).map(function(line) {
		
		return line.split(regexp);
	});
	
};