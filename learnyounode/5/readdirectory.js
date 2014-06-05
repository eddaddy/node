var fs = require('fs');
var path = require('path');

function usage(){
	console.log("USAGE: \nnode process.argv[1] <directory> <file extension filter>");
}

var directory = process.argv[2]
var file_ext  = '.' + process.argv[3]

// check number of command arguments
if(process.argv.length <= 2){
	usage();
	process.exit();
}

fs.readdir(directory, function(err, list){
	for(var i = 0; i < list.length; i++){
		//console.log(path.extname(list[i]));
		if(path.extname(list[i]) == file_ext){
			console.log(list[i]);
		}
	}
});
