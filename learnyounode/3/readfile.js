var fs = require('fs');
filename = process.argv[2]
contents = fs.readFileSync(filename);
/*
fs.readFile('testdata.txt', 'utf8', function(err, data){
	if(err){
		return console.log(err);
	}
	console.log(data);
});
*/

var str = contents.toString();
perline = str.split("\n");
numlines = perline.length - 1
//console.log(str);
console.log(numlines);
