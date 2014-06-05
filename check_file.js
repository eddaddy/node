var fs = require('fs');

var name = 'foo.txt'; 
fs.stat(name, function onStats(err, stats){
	if(err) throw err;
	if(stats.isFile()) console.log('File: ' + name);
	if(stats.isDirectory()) console.log('Dir: ' + name);
});
