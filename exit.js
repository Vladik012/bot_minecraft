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


bot.on('chat',function (username, message){
    if(username === 'botjs') return;

    if(message === 'exit' && username === 'Vladik012'){
        bot.quit()
    }
})