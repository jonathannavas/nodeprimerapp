const express = require('express')
const app = express()

const hbs = require('hbs');

const port = process.env.PORT || 3000;

require('./hbs/helpers/helpers');

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Jonathan'
    });

});
app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando al puerto ${port}`);
});