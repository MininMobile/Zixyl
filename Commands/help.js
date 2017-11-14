import { RichEmbed } from "discord.js";

exports.play = async function (i) {
    switch (i.args[0]) {
        case "help":
            var lines = ["**Commands**", ""
            `**${i.config}help** DMs author command list`,
            `**${i.config}ping** Bot response time in milliseconds`,
            `**${i.config}status** Basic bot statistics`];
            i.msg.author.send(lines.join("\n"));
            i.msg.channel.send(`Slid into your DMs :wink:`);
            break
    }
}