const http = require('http');
const fs =require('fs');
const server = http.createServer((req,res)=>{
   const readStream =fs.createReadStream('./Static/book.pdf');
   res.writeHead(200,{'Content-type': 'application/pdf'});
   readStream.pipe(res);
});
server.listen(3000);

