
const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.static('public'));


app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index');
});


app.get('/hobby', (req, res) => {
    res.render('hobby');
});


app.get('/food', (req, res) => {
    res.render('food');
});


app.get('/dream', (req, res) => {
    res.render('dream');
});

app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`);
});