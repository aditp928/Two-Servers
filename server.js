let http = require ('http');

let goodPORT = 7000;

let badPORT = 7500;

function handleRequest(request, response){
    console.log(request);
   response.end("You're the best! " + request.url);
}

function badRequest(request, response){
    console.log(request);
   response.end("You're the worst! " + request.url);
}
const goodServer = http.createServer(handleRequest);
const badServer = http.createServer(badRequest);

goodServer.listen(goodPORT, function(){
    console.log("Listening on port %s", goodPORT);
});

badServer.listen(badPORT, function(){
    console.log("Listening on port %s", badPORT);
});