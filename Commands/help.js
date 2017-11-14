exports.play = async function (i) {
    switch (i.args[0].toLowerCase()) {
        case "help":
            var lines = ["**Commands**", "",
            `**${i.config.prefix}help** DMs author command list`,
            `**${i.config.prefix}ping** Bot response time in milliseconds`,
            `**${i.config.prefix}status** Basic bot statistics`];
            i.msg.author.send(lines.join("\n"));
            i.msg.channel.send(`Slid into your DMs :wink:`);
        break
    }
}