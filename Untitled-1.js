const { Telegraf, session } = require('telegraf');
let msg;
const bot = new Telegraf("6082306857:AAF_vGCBs91VLz6vZh0RLxqBwHt837wpZOo");
bot.start((ctx) => ctx.reply('Welcome'));
bot.use(session())
bot.on("message", async (ctx) => {
    //msg = await ctx.message.text;
    await ctx.reply(ctx.message)
});
bot.launch();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send(`ddd`)
})
app.listen(port, () => {
})
