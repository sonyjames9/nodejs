const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello world');
    console.log('Test');
    res.end();
  }

  if (req.url === '/api/courses') {
    res.write(JSON.stringify([1, 2, 3]));
    console.log("Test courses");
    res.end();
  }
});
server.listen(3000);

// server.on('connection', (socket) => {
//   console.log('New connection...');
// })

console.log('Server started on 3000');

