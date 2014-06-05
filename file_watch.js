var fs = require('fs');

var watcher = fs.watch('foo.txt', function onFileEvent(event, filename){
	console.log(event + ': ' + filename);
});

// later, somewhere else
//watcher.close();
