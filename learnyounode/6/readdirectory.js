/* Accept a directory and file extension as input
   Read the directory and return files with the file extension that was passed as a parameter.
*/
var fs = require('fs');
var path = require('path');

module.exports = function(){

		var directory = process.argv[2]
		var file_ext  = '.' + process.argv[3]

		if(process.argv.length <= 2){
		    console.log("USAGE: \nnode process.argv[1] <directory> <file extension filter>");
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
	//}
}
//exports.readdir = readdir;
