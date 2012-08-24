//import required libraries
var dns = require('native-dns');
var util = require('util');

var customEntries = {
	'test.dns': [
		{
			name: 'test.dns',
			address: '127.1.2.1',
			ttl: 30
		},
		{
			name: 'test.dns',
			address: '127.1.2.2',
			ttl: 30
		},
		{
			name: 'test.dns',
			address: '127.1.2.3',
			ttl: 30
		}
	]
};

var server = dns.createServer();

server.on('request', function (request, response) {
	var domain = request.question[0].name;
	if(customEntries[domain]){
		//if custom entry exists, push it back...
		var entries = customEntries[domain];
		for(var i=0;i<entries.length;i++){
			var entry = entries[i];
			response.answer.push(dns.A(entry));
		}
		response.send();
	} else {
		var question = dns.Question({
		  name: domain,
		  type: 'A',
		});
		var req = dns.Request({
		  question: question,
		  server: { address: '8.8.8.8', port: 53, type: 'udp' },
		  timeout: 1000,
		});
		req.on('message', function (err, answer) {
			var entries = [];
			answer.answer.forEach(function (a) {
				response.answer.push(dns.A(a));
			});
			response.send();
		});
		req.send();
	}
});

server.on('error', function (err, buff, req, res) {
  console.log(err.stack);
});

console.log('Listening on '+53);
server.serve(53);