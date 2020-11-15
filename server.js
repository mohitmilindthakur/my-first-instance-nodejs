const express = require('express');
const path = require('path');
const app = express();


const PORT = 5000;

app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));


app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

app.listen(PORT, () => console.log(PORT));