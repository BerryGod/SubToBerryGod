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
        let status = status2[Math.floor(Math.random() * státuszok.length)]

        bot.user.setActivity(status, { type: "STREAMING" })
    }, 3000)
})

bot.on("message", async message => {
    let MessageArray = message.content.split(" ");
    let cmd = MessageArray[0];
    let args = MessageArray.slice(1);
    let prefix = botconfig.prefix;

    
    
  if (cmd === `${prefix}command1`) {
        message.channel.send("working");
    }
    
     if (cmd === `${prefix}edit`) {
        message.channel.send(`${message.author.username} edit!`).then(asyncmsg => {
            setTimeout(() => {
                msg.edit('edit2');
            }, 1000);
            setTimeout(() => {
                msg.edit('edit3');
            }, 1800);
            setTimeout(() => {
                msg.edit('edit4 ');
            }, 2500);
            setTimeout(() => {
                msg.edit('edit5 ');
            }, 3000);
            setTimeout(() => {
                msg.edit('edit6 ');
            }, 3500);
            setTimeout(() => {
                msg.edit('edit7');
            }, 4000);
            setTimeout(() => {
                msg.edit('edit8');
            }, 4500);
            setTimeout(() => {
                msg.edit('edit9 ');
            }, 5000);
            setTimeout(() => {
                msg.edit(`${message.author.username} <-- he is a good boi `);
            }, 5500);
        });
    } 
    
     if(cmd ==="report"){
    if(message.channel.type === 'dm') return message.reply("You cant use it here");
    const report_usr = message.mentions.users.first();
    const channel_id = "Your channel id"; 
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
    .setDescription(`*${report_usr} has been reported!*\n **Indoka: ${reason}**\n *notifier: ${message.author.username}*\n on server?: ${message.guild.name}`)
    .setFooter(bot.user.username, bot.user.displayAvatarURL())
    .setTimestamp()
    .setColor("RANDOM")
        bot.channels.cache.get(channel_id).send(embed)
     
     }
    
    
    
  
 
    
   
    
    

})


bot.login(process.env.BOT_TOKEN);
