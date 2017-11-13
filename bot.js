const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Successfully Connected to Discord Servers.');
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('token');
