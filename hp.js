const mf = require('mineflayer');

const bot = mf.createBot({
    host: 'localhost',
    port: '',
    version: '1.18.2',
    username: 'jsbot'
});

bot.once('spawn', function() {
    bot.chat('hello world')
});

bot.on('chat', function (username, message){
    if(message === "hp"){
        bot.chat('У меня ' + bot.health.toFixed(0) + ' здоровье')
    }
    if(message === "Еда"){
        bot.chat('У меня ' + bot.food + ' еды')
    }
});
