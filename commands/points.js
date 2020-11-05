exports.run = (client, message) => {
    const Discord = require("discord.js");
  const key = `${message.guild.id}-${message.author.id}`;
   const embed = new Discord.MessageEmbed()
     .setTitle(`${message.guild.name}`)
     .setAuthor(message.author.username, message.author.avatarURL())
     .setDescription("Your current Points on this Server!")
     .setColor(2899536);
       embed.addField("Points", `${client.points.get(key, "points")}`);
       embed.addField("Level", `${client.points.get(key, "level")}`);
         return message.channel.send({embed});
       }
