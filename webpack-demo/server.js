const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';

app.use(express.static('dist'));

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, host, err => {
    if (err) {
        return console.log(err);
    }
    console.log(`listening at http://${host}:${port}`);
});
