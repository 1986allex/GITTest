const { Telegraf, session } = require('telegraf');

const bot = new Telegraf("6082306857:AAF_vGCBs91VLz6vZh0RLxqBwHt837wpZOo");
bot.start((ctx) => ctx.reply('Welcome'));
bot.use(session())
bot.hears('hi', (ctx) => {
    ctx.session.msg = ctx.message;
    ctx.reply(ctx.message)
});
bot.launch();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('<div onclick="alert(' + msg + ')">sddfsdf</div>')
})
app.listen(port, () => {
})
