const Discord = require("discord.js")
const botconfig = require("./botconfig.json");
const bot = new Discord.Client({ disableEveryone: true });

bot.on("ready", async() => {
    console.log('${bot.user.username} Your bot has started')

    let status2 = [
        "Your Status here",
        "Your status here or you can copy paste ",
        "like this ",
    ]

    setInterval(function() {
        let status = status2[Math.floor(Math.random() * status2.length)]

        bot.user.setActivity(status, { type: "STREAMING" })
    }, 3000)
})

bot.on("message", async message => {
    let MessageArray = message.content.split(" ");
    let cmd = MessageArray[0];
    let args = MessageArray.slice(1);
    let prefix = botconfig.prefix;

    
    
  if (cmd === `${prefix}Command`) {
        message.channel.send("answer");
    }
    
 
    
     if(cmd ==="report"){
    if(message.channel.type === 'dm') return message.reply("You cant use it here");
    const report_usr = message.mentions.users.first();
    const channel_id = "Your channel id here"; 
    const reason = message.content.slice(30);
 
    if(!report_usr){
        return message.reply('User who want to report?');
    }
    
    if(!reason){
        return message.reply("reason?");
    }
 
    //embed
    const embed = new Discord.MessageEmbed()
    .setTitle('Report')
    .setDescription(`*${report_usr} has been reported!*\n **Reason: ${reason}**\n *notifier: ${message.author.username}*\n on server?: ${message.guild.name}`)
    .setFooter(bot.user.username, bot.user.displayAvatarURL())
    .setTimestamp()
    .setColor("RANDOM")
        bot.channels.cache.get(channel_id).send(embed)
     
     }
    
    
    
  
 
    
   
    
    

})


bot.login(process.env.BOT_TOKEN);
