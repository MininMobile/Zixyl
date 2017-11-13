const Discord = require("discord.js"),
      fs = require('fs'),
      client = new Discord.Client();

const prefix = "x/";

client.on('ready', () => {
  log(`Logged in on ${client.guilds.size} servers!`);
});

client.on('message', msg => {
  if (msg.content === prefix + 'ping') {
    msg.reply(':ping_pong: Pong');
  }
});

client.login(fs.readFile('/etc/hosts', 'utf8', function (err,data) { if (err) { return console.log(err); } return data; }));