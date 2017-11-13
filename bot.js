// NODE.JS REQUIREMENTS
const Discord = require("discord.js"),
      moment = require('moment'),
      fs = require('fs'),
      bot = new Discord.Client();

// VARIABLES
const prefix = "x/";

// FUNCTIONS
function log(text) {
  console.log(moment().format('LTS') + ' | ' + text);
}

// CONNECTION EVENTS
bot.on('ready', () => {
  log(`Logged in on ${client.guilds.size} servers!`);
});

// ON MESSAGE
bot.on('message', async message => {
  if (message.content === prefix + 'ping') {
    message.reply(':ping_pong: Pong');
  }
});

var token = fs.readFile('../zixyl.txt', 'utf8', function (err,data) { return data; });
log(token)
bot.login(token);