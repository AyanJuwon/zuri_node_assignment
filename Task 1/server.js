const http = require("http");

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "content-type": "text/html" });

//   res.write("Hello World!, here is my first node server \n");
//   res.write(
//     'My JSON object: { "name": "Ayanniran Oluwajuwon","country":" Nigeria":,"hobby": "Gaming, Coding"}'
//   );
  res.end(
      '<html><body style = "background:black,text-align:center,color:white" > <h1>Node Test</h1><p>This is a simple html page on a node server</p></body ></html > '
  );
});
server.listen(3000, "localhost");

console.log("server created");
