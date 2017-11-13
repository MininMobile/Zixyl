// NODE.JS REQUIREMENTS
const Discord = require("discord.js"),
      moment = require('moment'),
      fs = require('fs'),
      path = require('path'),
      config = require(path.join(__dirname + "/../config.json"));
      bot = new Discord.Client();

// VARIABLES
const prefix = "x/";

// FUNCTIONS
function log(text) {
  console.log(moment().format('LTS') + ' | ' + text);
}

// CONNECTION EVENTS
bot.on('ready', () => {
  log(`Logged in on ${bot.guilds.size} servers!`);
});

// ON MESSAGE
bot.on('message', async message => {
  if (message.content === prefix + 'ping') {
    message.reply(':ping_pong: Pong');
  }
});

bot.login(config.token);