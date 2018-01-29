const TelegramBot = require('node-telegram-bot-api');


const TOKEN = '519396146:AAFJhJCSrvSp6ZNGRYdshsGv6Hn7TPyV5hw';


const bot   = new TelegramBot(TOKEN,{polling: true});

bot.on('message',msg=>{
    bot.sendMessage(msg.chat.id,'Hello From Heroku, bot says: "Hi, ${msg.from.first_name}"');
});



