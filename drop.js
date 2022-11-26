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
    
    if (message === "drop"){
        function tossNext(){
    
    if(bot.inventory.items().length === 0) {
    
        bot.chat('У меня пусто')
    
    } else {
    
        const item = bot.inventory.items()[0]
    
        bot.tossStack(item,tossNext)}
    
    }
    
    tossNext()}
    
    });