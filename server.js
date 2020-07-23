const express = require('express');
const server = express();

server.get('/me', (req, res) => {

    res.send('Hola Mundo');

})

server.get('/me/:perros', (req, res) => {

    const names = ['Nico', 'Manuel', 'Joan'];
    const id = req.params.perros;
    res.send(names[id]);
})

server.get('/me2', (req, res) => {

    const names = ['Joan', 'Nico', 'Marlon', 'Vivi']

    const { id = 0 } = req.query

    res.send(names[id])
})

server.listen(3000, () => {
    console.log('servidor listo');
});

