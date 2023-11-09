const { Telegraf, session } = require('telegraf');
const bot = new Telegraf("6082306857:AAF_vGCBs91VLz6vZh0RLxqBwHt837wpZOo");
let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database("example.db");

bot.start((ctx) => {
  ctx.reply('Welcome');
  db.run("CREATE TABLE IF NOT EXISTS Tbl (id INTEGER PRIMARY KEY, name TEXT)");
});
bot.use(session())
bot.hears("qqq", async (ctx) => {
    db.run("INSERT INTO Tbl (name) VALUES ('bar')", () => {
      console.log("done")
    });
   /*let msg = ctx.message.message_id;
   console.log(msg)
    //await ctx.reply(ctx.message.id)
   await msg)*/
});
bot.hears("1", async (ctx) => {
  db.get(`SELECT * FROM Tbl WHERE id = 1`, async function(err, row) {
      console.log(row)
    if (!row) return ctx.reply("Такого значения не существует в базе данных");
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
