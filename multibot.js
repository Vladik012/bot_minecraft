const mf = require('mineflayer');

const bot = mf.createBot({
    host: 'localhost',
    port: '',                                     //Указать порт
    version: '1.18.2',
    username: 'jsbot'
});

class multibot {
    constructor(username) {
        this.username = username;
        this.host = 'localhost';
        this.port = 58059;                             //Указать порт
        this.version = '1.18.2';

        this.initBot();
    }

    initBot() {
        this.bot = mf.createBot({
            "username": this.username,
            "host": 'localhost',
            "port": 58059,                             //Указать порт
            "version": '1.18.2'

            
        })
        this.events()
    }   
    events() {
        this.bot.on('spawn', async () => {
            this.bot.chat('hello!')
        })
    }
}

let bots = [];
for(var i = 0; i < 6; i++) {
    bots.push(new multibot(`jsbot${i}`))
}