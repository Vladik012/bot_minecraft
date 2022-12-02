const mf = require('mineflayer');

const bot = mf.createBot({
    host: 'localhost',
    port: '57801',
    version: '1.18.2',
    username: 'jsbot'
});


//           npm install mineflayer-web-inventory

const iv = require("mineflayer-web-inventory")
iv(bot)