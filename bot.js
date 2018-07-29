const botSettings = require("./config.json");
const Discord = require("discord.js");
console.log(botSettings.token);
const bot = new Discord.Client();

const embed = new Discord.RichEmbed()
  .setTitle("Oh no!")

  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x8080ff)
  .setDescription("You need [Discord Nitro](https://discordapp.com/nitro) to view this message!")
  .setThumbnail("https://discordapp.com/assets/2c21aeda16de354ba5334551a883b481.png");

	

bot.on('ready', () => {
    console.log("I am ready");
});
 
bot.on('message', async message => {
    if(message.author !== bot.user) return;
 
    if(message.content === "!(!)!") {
    	message.delete(10)
        message.channel.send({embed});
    }
});

bot.login(botSettings.token);