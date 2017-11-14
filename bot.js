// NODE.JS REQUIREMENTS
const discord = require("discord.js");
const moment = require('moment');
const fs = require('fs');
const path = require('path');
const token = require(path.join(__dirname + "/../token.json"));
const config = require("./config.json");
const bot = new discord.Client();

// COMMAND IMPORTER
const imports = {
  msg:undefined,
  args:undefined,
  config:config,
  bot:bot
};

// FUNCTIONS
function log(text) {
  console.log(moment().format('LTS') + ' | ' + text);
}

// CONNECTION EVENTS
bot.on('ready', () => {
  log(`Connected to ${bot.guilds.size} servers!`);
  bot.user.setGame("Type x/help");
});

// ON MESSAGE
bot.on('message', async message => {
  let cmd = message.content.split(" ")[0].substr(config.prefix.length);
  let arguments = message.content.split(" "); arguments[0].substr(config.prefix.length);

  for (let i = 0; i < config.commandLoader.length; i++) {
    var command = config.commandLoader[i]
    if (command.name == cmd) {
      let file = `./${config.commandPrefix}${command.file}${config.commandSuffix}`;
      if (fs.existsSync(file)) {
        imports.msg = message;
        imports.args = arguments;
        require(file).play(imports);
      }
      break
    }
  };
});

bot.login(token.token);
