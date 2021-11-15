/* global __dirname */

const fs = require('fs');
const net = require('net');
const http = require('http');
const format = require(__dirname+'/pos-format.js');

let config = {
	socket: {
		tcpPort: process.env['TCP_PORT'] || 81,
		httpPort: process.env['HTTP_PORT'] || 80,
		apiKey: process.env['API_KEY'] || 'pos-server'
	},
	printer: {
		type: 'adt01',
		interface: process.env['USB_DEVICE'] || '/dev/usb/lp0',
		characterSet: 'GERMANY',
		width: 32
	},
	message: {
		maxLength: process.env['MESSAGE_MAX_LENGTH'] || 1000
	}
};

function isWin(){
	var isWin = /^win/.test(process.platform);
	return isWin;
}
var printerInterface = null;
if(isWin() === false){
	printerInterface = fs.createWriteStream(config.printer.interface);
}else{
	printerInterface = process.stdout;
}


function writeToPrinter(data){
	console.log('/dev/usb/lp0', data);
	if(typeof data === 'string'){
		printerInterface.write(data, 'ascii');
	}else{
		printerInterface.write(data);
	}
}

writeToPrinter(format.charset);

const tcpServer = net.createServer((connection) => {
	connection.on('error', () => {});
	connection.pipe(printerInterface);
});

tcpServer.on('error', (err) => {
	throw err;
});

tcpServer.listen(config.socket.tcpPort, () => {
  console.log('tcp server listening on port '+config.socket.tcpPort);
});



let httpServer = http.createServer();

httpServer.on('request', (req, res)=>{
	
	if(req.headers['apikey'] !== config.socket.apiKey){
		res.writeHead(403);
		res.end(JSON.stringify({success: false}));
		return false;
	}
	
	let body = [];
	let bodyLengthTotal = 0;
	
	req.on('data', (chunk) => {
		bodyLengthTotal += chunk.length;
		body.push(chunk);
		
		if(bodyLengthTotal > config.message.maxLength){
			res.writeHead(500, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify({success: false, error: 'Message is to long. '+bodyLengthTotal+' of '+config.message.maxLength+' chars.'}));
		}
	}).on('end', () => {
		try{
			if(res.finished === true){
				return false;
			}
			let bodyBuffer = Buffer.concat(body);
			let printText = null;
			
			if(req.headers['content-type'] === 'application/json'){
				let bodyObject = bodyBuffer.toString('utf8');
				bodyObject = JSON.parse(bodyObject);
				printText = bodyObject.text || null;
			}else{
				printText = JSON.parse(JSON.stringify(bodyBuffer.toString('utf8')));
			}
			
			if(printText === null){
				throw new Error('missing print text');
			}
			
			writeToPrinter(format.reset);
			writeToPrinter(printText);
			writeToPrinter("\r\n\r\n\r\n");
			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify({
				success: true,
				error: null,
				text: printText
			}));
		}catch(err){
			console.error(err);
			res.writeHead(500, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify({success: false, error: err.toString('utf8')}));
		}
	});
	return null;
});

httpServer.listen(config.socket.httpPort, ()=>{
	console.log('http Server listening on port '+config.socket.httpPort);
});