const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-type': 'application/json' });

        let saludo = {
            nombre: 'Jonathan Navas',
            edad: '25',
            ciudad: 'Quito',
            url: req.url
        }

        res.write(JSON.stringify(saludo));
        res.end();

    })
    .listen(3000);
console.log('Escuchando al puerto 3000');
console.log('Escuchando al puerto 3000');