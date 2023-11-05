const { Telegraf } = require('telegraf');

const bot = new Telegraf("6082306857:AAF_vGCBs91VLz6vZh0RLxqBwHt837wpZOo");
bot.start((ctx) => ctx.reply('Welcome'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();
