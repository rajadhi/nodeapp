function route(handle, pathname, response, postData) {
    console.log("ROUTER: About to route a request for " + pathname);
    
    if(typeof handle[pathname] == 'function') {
        handle[pathname](response, postData);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-type": "text/plain"});
        response.write("404 Not Found");
        response.end();
    
    }
}

exports.route = route;
