if (commandIs('giveaway', message)) {
    let perm = message.channel.permissionsFor(message.member).has('MENTION_EVERYONE') || message.author.id == 189400912333111297;
    if (perm == false) {message.channel.send("Error: You need to have the Permission: Music4All Admin"); return;}
    if (!slasharg[1] || !slasharg[2]) {message.channel.send("Error: `You gotta put in -giveaway/[title]/[description]`"); return;}
    if (!slasharg[3]) {time = 300000} else {time = slasharg[3]*60000}
      var embeded = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTitle("")
            .addField(slasharg[1], slasharg[2])
            .setFooter("Press the reaction below to enter.");
    var m = await message.channel.send(embeded);
    m.react("🎉");
    setTimeout(function(){
      var memberzz = "ERROR";
      m.clearReactions();
      var embeded = new Discord.RichEmbed()
              .setAuthor(message.author.username, message.author.avatarURL)
              .setTitle("")
              .addField("Giveaway over.", "Congratulations to: " + memberzz + " for winning " + slasharg[1])
              .setFooter("We collected " +  + " entries.");
      m.edit(embeded);
  }, time);
  }
