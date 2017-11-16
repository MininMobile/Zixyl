exports.play = async function (i) {
  switch (i.args[0]) {
    case "giveaway":
      let perm = i.msg.channel.permissionsFor(i.msg.member).has('MENTION_EVERYONE') || i.msg.author.id == 189400912333111297;
      if (perm == false) {
        i.msg.channel.send("Error: You need to have the Permission: Mention Everyone");
        break
      }

      var slasharg = i.msg.content.split("/");
      slasharg.shift();

      if (!slasharg[1] || !slasharg[2]) {
        i.msg.channel.send("Error; it has to follow this template: `x/giveaway /[prize]/[description]/[time (seconds)]`\nNote the space between `x/giveaway` and `/[prize]`, it wont work if you forget that\n`time` is optional");
        break
      }

      var time = 10000;
      if (slasharg[3]) { time = parseInt(slasharg[3])*1000; }

      var embeded = new i.d.RichEmbed()
        .setAuthor(i.msg.author.username, i.msg.author.avatarURL)
        .setTitle("Giveaway Started!")
        .addField(`The Prize`, slasharg[1])
        .addField(`Description`, slasharg[2])
        .addField(`And it lasts for`, `${slasharg[3]/60000} minutes.`)
        .setFooter("Press the reaction below to enter.");
      var m = await i.msg.channel.send(embeded);
      m.react("🎉");

      setTimeout(function() {
        var users = [];
        m.reactions.get("🎉").users.forEach(user => {
          if (user.id == "379713918194679808") { } else {
            users.push(`<@${user.id}>`);
          }
        });
        var member = users[Math.floor(Math.random() * users.length)];
        embeded = new i.d.RichEmbed()
          .setAuthor(i.msg.author.username, i.msg.author.avatarURL)
          .setTitle("Giveaway Over")
          .addField("Winner", member)
          .addField("Their Prize", slasharg[1])
          .setFooter("We collected " + users.length + " entries.");
        m.edit(embeded);
        m.clearReactions();
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
