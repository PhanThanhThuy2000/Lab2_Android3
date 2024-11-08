const { createServer } = require('node:http'); // import thu vien http

const hostname = '127.0.0.1'; //loaction
const port = 3000; // cổng lắng nghe server

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.write('<h1>Xin chào node js</h1>');
    res.write(`<h1>Nội dung 1</h1>
                <h2>Nội dung 2</h2>`);
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});