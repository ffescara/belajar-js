const http = require('http');
 
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');

    const { url } = request;
    const { method } = request;

    // BISA JUGA
    // const { method, url } = request;
 
    if(url === '/') {

        if(method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>Ini adalah homepage</h1>');
        } else {
            response.statusCode = 400;
            response.end(`Halaman tidak dapat diakses dengan ${method} request`);
        }
        // curl http://localhost:5000/
    } else if(url === '/about') {

        if(method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>Halo! Ini adalah halaman about</h1>');
        } else if(method === 'POST') {
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.statusCode = 200;
                response.end(`Halo, ${name}! Ini adalah halaman about`);
            });
        } else {
            response.statusCode = 400;
            response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
        }
        // curl http://localhost:5000/about
    } else {
        response.statusCode = 404;
        response.end('<h1>Halaman tidak ditemukan!</h1>');
    }
 
    // curl http://localhost:5000/<any>
};
 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});