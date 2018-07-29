const botSettings = require("./config.json");
const Discord = require("discord.js");
console.log(botSettings.token);
const bot = new Discord.Client();

const embed = new Discord.RichEmbed()
  .setTitle("Oh no!")
  .setColor(0x8080ff)
  .setDescription("You need [Discord Nitro](https://discordapp.com/nitro) to view this message!")
  .setThumbnail("https://discordapp.com/assets/2c21aeda16de354ba5334551a883b481.png");

const anime = new Discord.RichEmbed()
  .setTitle("Anime is gay")
  .setColor(0x8080ff)
  .setDescription("For quite some time now, I've had this lingering suspicion that the japanese government created anime as a sort of weaponized autism to be unleashed quietly on america in an attempt to rot america's youth and create an entirely unfuckable generation of kids who can't carry on their family lines. Generation Lost. Some ol' supervillain shit. Why would they do such a thing? Uh, I donno, ask fucking nagasaki. It adds up. It would have been a great plan, too, had it not backfired spectacularly, what with Japan now being the mecca for weebs and sex weirdos.﻿")

	.setThumbnail("https://pre00.deviantart.net/6222/th/pre/f/2017/187/f/e/bonzi_buddy_2_0__wip__2__by_the64thgamer-dbf9v1o.png");

bot.on('ready', () => {
    console.log("I am ready");
});
 
bot.on('message', async message => {
    if(message.author !== bot.user) return;
 
    if(message.content === "!(!)!") {
    	message.delete(10)
      message.channel.send({embed});
    }

    if(message.content === "@(@)@") {
      message.delete(10)
      message.channel.send({embed});
    }
});

bot.login(botSettings.token);