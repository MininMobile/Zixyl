const Discord = require("discord.js"),
      fs = require('fs'),
      bot = new Discord.Client();

const prefix = "x/";

bot.on('ready', () => {
  log(`Logged in on ${client.guilds.size} servers!`);
});

bot.on('message', async message => {
  if (message.content === prefix + 'ping') {
    message.reply(':ping_pong: Pong');
  }
});

bot.login(fs.readFile('../zixyl.txt', 'utf8', function (err,data) { if (err) { return console.log(err); } return data; }));