exports.play = async function (i) {
    const m = await i.msg.channel.send(":ping_pong: Pinging...");
    m.edit(`:ping_pong: **Bot** ${m.createdTimestamp - i.msg.createdTimestamp}ms **API** ${Math.round(i.bot.ping)}ms`);
}