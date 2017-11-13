exports.play = async function (i) {
    i.msg.channel.send(`**Statistics**
\n**Servers** ${i.bot.guilds.size}
**Users** ${i.bot.users.size}
**Channels** ${i.bot.channels.size}`);
}