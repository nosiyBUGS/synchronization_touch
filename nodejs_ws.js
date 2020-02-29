var ws = require("nodejs-websocket");
console.log("connection begin");
var server=ws.createServer(function(conn){
	conn.on("text",function(msg){
		console.log("message: "+msg);
		server.connections.forEach(function (conn) {
			conn.sendText( msg);
		});
	});
}).listen(4399);
console.log("connection established");