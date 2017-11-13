exports.play = async function (i) {
    i.msg.author.send(`**Commands**
\n**x/help** Sends this message
**x/ping** Pong
**x/status** Gives bot statistics`);
    i.msg.reply(`Slid into your DMs :wink:`);
}