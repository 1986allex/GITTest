const { Telegraf, session } = require('telegraf');
const bot = new Telegraf("6082306857:AAF_vGCBs91VLz6vZh0RLxqBwHt837wpZOo");
let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database("example.db");

bot.start((ctx) => ctx.reply('Welcome'));
bot.use(session())
bot.on("message", async (ctx) => {
    db.get(`SELECT * FROM Tbl WHERE id = ${ctx.message}`, async function(err, row) {
        if (!row) return res.send("Такого значения не существует в базе данных");
        return ctx.reply(row.name)
    })
   /*let msg = ctx.message.message_id;
   console.log(msg)
    //await ctx.reply(ctx.message.id)
   await msg)*/
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
