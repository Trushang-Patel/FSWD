var http = require('http');
var a= 10;
var b=20;
var c= a+b;
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("a= "+a+"<br> b= "+b+"<br>");
    res.write("The sum of a and b is: "+c+"</br>");
    res.end('Hello World!');
}).listen(8080);
console.log("Server is running on http://localhost:8080/")