var http = require("http");

function start() {
    function onRequest(request, response) {
        console.log("Request received.");
        response.writeHead(200, {"Content-type": "text/plain"});
        response.write("Hello world");
        response.end();
    }

    http.createServer(onRequest).listen(10028);
    console.log("Server has started.");
}

exports.start = start;
