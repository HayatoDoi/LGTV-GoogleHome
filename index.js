const config = require('./config').config;
const wol = require('wake_on_lan');
const lgtv = require("lgtv2")({
    url: `ws://${config.LGTVIP}:3000`,
});

wol.wake(config.LGTVMAC);

lgtv.on('connect', () => {
    lgtv.request('ssap://system/turnOff', function (err, res) {
        lgtv.disconnect();
    });
});

