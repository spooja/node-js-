var http = require('http');

var userCount = 0;
http.createServer(function (request, response) {
	console.log('new connection');
	userCount++;

	response.writeHead(200,{'Content-Type': 'text/plain'});
	response.write('hello!\n');
	response.write('we have had '+userCount+' visits!\n');
	response.end();
}).listen(1992);

console.log('server started');

	