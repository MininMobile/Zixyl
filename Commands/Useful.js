exports.play = async function (i) {
    switch (i.args[0]) {
        case "status":
            var lines = ["**Statistics**", "",
            `**Servers** ${i.bot.guilds.size}`,
            `**Users** ${i.bot.users.size}`,
            `**Channels** ${i.bot.channels.size}`];
            var embed = new i.d.RichEmbed().setDescription(lines.join("\n"));
            i.msg.channel.send(embed);
        break
    }
}