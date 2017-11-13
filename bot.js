// NODE.JS REQUIREMENTS
const Discord = require("discord.js"),
      moment = require('moment'),
      fs = require('fs'),
      path = require('path'),
      token = require(path.join(__dirname + "/../token.json"));
      config = require("./config.json");
      bot = new Discord.Client();

// COMMAND IMPORTER
const imports = {
  msg:undefined,
  args:undefined,
  bot:bot
};

// FUNCTIONS
function log(text) {
  console.log(moment().format('LTS') + ' | ' + text);
}

// CONNECTION EVENTS
bot.on('ready', () => {
  log(`Connected to ${bot.guilds.size} servers!`);
});

// ON MESSAGE
bot.on('message', async message => {
  let command = message.content.split(" ")[0].substr(config.prefix.length);
  let arguments = message.content.split(" "); arguments[0].substr(config.prefix.length);

  let file = `./${config.commandPrefix}${command}${config.commandSuffix}`;
  if (fs.existsSync(file)) {
    imports.msg = message;
    imports.args = arguments;
    require(file).play(imports);
  }
});

bot.login(token.token);