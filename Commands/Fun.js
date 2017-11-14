exports.play = async function (i) {
  switch (i.args[0]) {
    case "giveaway":
      if (perm == false) { 
        i.msg.channel.send("Error: You need to have the Permission: Mention Everyone");
        return
      }

      let perm = i.msg.channel.permissionsFor(i.msg.member).has('MENTION_EVERYONE') || i.msg.author.id == 189400912333111297;

      if (!slasharg[1] || !slasharg[2]) {
        i.msg.channel.send("Error: `You gotta put in -giveaway/[title]/[description]`");
        return
      }
      if (!slasharg[3]) { time = 300000; } else { time = slasharg[3]*60000; }
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
        .setFooter("We collected " +  + " entries.");
        m.edit(embeded);
      }, time);
    break
    case "vote":
      var words = '';
      for (var i = 0; i != i.args.length-1; i++) {
        words = words + ' ' + i.args[i + 1];
      }
      var embeded = new Discord.RichEmbed()
        .setAuthor(i.msg.author.username, i.msg.author.avatarURL)
        .addField("It's time to vote!", words)
        .setFooter("");
      m = await i.msg.channel.send(embeded);
      await m.react("👍");
      await m.react("👎");
    break
  }
}
