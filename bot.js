const mf = require('mineflayer');


const bot = mf.createBot({
    host: 'localhost',
    port: '',
    version: '1.18.2',
    username: 'jsbot'
});

bot.once('spawn', function() {
    bot.chat('Hello world!')
});
