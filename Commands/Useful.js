exports.play = async function (i) {
    switch (i.args[0]) {
        case "status":
            var lines = ["**Statistics**", "",
            `:house: **Servers** ${i.bot.guilds.size}`,
            `:busts_in_silhouette: **Channels** ${i.bot.channels.size}`,
            `:bust_in_silhouette: **Users** ${i.bot.users.size}`];
            var embed = new i.d.RichEmbed().setDescription(lines.join("\n"));
            i.msg.channel.send(embed);
        break
    }
}