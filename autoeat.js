const mf = require('mineflayer');

const bot = mf.createBot({
    host: 'localhost',
    port: '57801',
    version: '1.18.2',
    username: 'jsbot'
});


//         npm install mineflayer-auto-eat




const autoeat = require('mineflayer-auto-eat').default


bot.loadPlugin(autoeat);

bot.once('spawn', () => {
    bot.autoEat.options.priority = 'saturation'
    bot.autoEat.options.startAt = '15'

    bot.autoEat.options.bannedFood.push('golden_apple', 'enchant_golden_apple')
})