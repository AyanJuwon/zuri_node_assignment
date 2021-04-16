
const http = require("http");



const fs = require('fs');
const server = http.createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    get_data();
    res.end( 'Data transferred');
    
    
});

server.listen(4000, "localhost");

console.log("server created");

function get_data(){
    const fetch = require('node-fetch');
    const url  = 'http://jsonplaceholder.typicode.com/posts'
    fetch(url)
        .then((resp) => resp.json())
        .then( json =>{
            data = JSON.stringify(json,null,2)
            fs.writeFileSync('./result/posts.json', data)
            fs.writeFileSync('./result/posts.txt', data)
        }
    )
}