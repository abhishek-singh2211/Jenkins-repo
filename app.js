var http = require('http')

http.createServer(onRequest).listen(3000);
console.log('Server has started');

function onRequest(request, response){
  response.writeHead(200);
  response.write('Hello This is Node.js website deployed through Jenkins');
  response.end();
}
