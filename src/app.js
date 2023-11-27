const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    const chunks = [];

    req.on('data', chunk => {
      const buf = Buffer.from(chunk);
      const str = buf.toString();
      chunks.push(str);
      const obj = JSON.parse(chunks)
      const value1 = obj.num1;
      const value2 = obj.num2;

      // Write code here to calculate power of a number
      if(+value1 <= 0){
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("The operation cannot be performed")
      }
      else{
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write(`The result is ${value1 ** value2}`)
      }
      res.end();
    });
    }
});

module.exports = server;
      
