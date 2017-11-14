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
  f: {
    log: function (text) { log(text) }
  },
  d:discord,
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
  if (!message.content.toLowerCase().startsWith(config.prefix)) return;

  let cmd = message.content.split(" ")[0].substr(config.prefix.length);
  let args = message.content.split(" "); args[0] = args[0].substr(config.prefix.length);

  for (let i = 0; i < config.commandLoader.length; i++) {
    var command = config.commandLoader[i]
    if (command.name == cmd) {
      let file = `./${config.commandPrefix}${command.file}${config.commandSuffix}`;
      if (fs.existsSync(file)) {
        imports.msg = message;
        imports.args = args;
        require(file).play(imports);
      }
      break
    }
  };
});

bot.login(token.token);
