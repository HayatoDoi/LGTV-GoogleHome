const config = require('./config').config;
const wol = require('wake_on_lan');
const express = require('express');
let app = express();

app.get('/LGTV/turnOn', function (req, res) {
    wol.wake(config.LGTVMAC);
    res.send('ok');
});

app.listen(3000, function () {
    console.log('Server listening on port 3000!');
});

