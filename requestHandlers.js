var exec = require("child_process").exec;

function start() {
    console.log("REQUEST_HANDLER: Request handler 'start' was called.");

    var content = "empty";
    
    exec("ls -lah", function(error, stdout, stderr) {
        content = stdout;
    });
    
    return content;
}

function upload() {
    console.log("REQUEST_HANDLER: Request handler 'upload' was called.");
    return "Hello upload!";
}

exports.start = start;
exports.upload = upload;
