exports.play = async function (i) {
  switch (i.args[0]) {
    case "giveaway":
      let perm = i.msg.channel.permissionsFor(i.msg.member).has('MENTION_EVERYONE') || i.msg.author.id == 189400912333111297;
      if (perm == false) { 
        i.msg.channel.send("Error: You need to have the Permission: Mention Everyone");
        break
      }

      slasharg = i.msg.split("/");

      if (!slasharg[1] || !slasharg[2]) {
        i.msg.channel.send("Error: `You gotta put in -giveaway/[prize]/[description]/[time (minutes)]`");
        break
      }
      if (!slasharg[3] || isNaN(slasharg[3])) { time = ; } else { time = slasharg[3]*60000; }
      var embeded = new Discord.RichEmbed()
        .setAuthor(i.msg.author.username, i.msg.author.avatarURL)
        .setTitle("")
        .addField(slasharg[1], slasharg[2])
        .setFooter("Press the reaction below to enter.");
      var m = await i.msg.channel.send(embeded);
      m.react("🎉");

      setTimeout(function(){
        var memberzz = "ERROR";
        m.clearReactions();
        var embeded = new Discord.RichEmbed()
        .setAuthor(i.msg.author.username, i.msg.author.avatarURL)
        .setTitle("")
        .addField("Giveaway over.", "Congratulations to: " + memberzz + " for winning " + slasharg[1])
        .setFooter("We collected " + 0 + " entries.");
        m.edit(embeded);
      }, time);
    break
    case "vote":
      i.args.shift();
      var words = i.args.join(" ");
      var embeded = new i.d.RichEmbed()
        .setAuthor(i.msg.author.username, i.msg.author.avatarURL)
        .setDescription(words)
        .setFooter("");
      m = await i.msg.channel.send(embeded);
      await m.react("👍");
      await m.react("👎");
    break
  }
}
