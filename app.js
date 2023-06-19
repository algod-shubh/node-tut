const http = require('http')

const server = http.createServer((req,res)=>{
    res.write("welcome to first html page");
    res.end();
})

const port = 3000;
server.listen(port);