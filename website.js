const {Console} = require('console');
const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    
    // res.statusCode = 200;
    res.setHeader('Content-Type','text/html')
    
    console.log(req.url);
    if (req.url=='/hello') {
        res.statusCode  = 200;
        const data=fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else if (req.url=='/about'){
        res.statusCode  = 200;
        res.end('<h1>about with it</h1> <p>Hey this is the also https/about</p>');
        
    }else if (req.url=='/') {
        res.statusCode  = 200;
        res.end('<h1>This is Http</h1> <p>Hey this is the also https</p>');
    }
    else{
        res.statusCode  = 404;
        res.end('<h1>Not found</h1> <p>page not found on server</p>');
    }
})

server.listen(port ,()=>{
   console.log(`server is listening on port ${port}`);
});
