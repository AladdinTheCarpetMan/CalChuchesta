const Discord = require("discord.js");

var bot = new Discord.Client();

const config = require("./config.json");

const token = config.token

const prefix = config.prefix

bot.on("ready",() => {
   console.log("Ready");

bot.generateInvite(["ADMINISTRATOR"]).then(link => {
    console.log(link);
}).catch(err => {
    console.log(err.stack); 
});

bot.on("guildDelete" , guild=>{
   console.log(`I have left ${guild.name} at ${new Date()}`);
});

bot.on("guildCreate" , guild => {
	console.log(`I have joined ${guild.name} at ${new Date()}`);
    guild.channels.find("name", "general").send(`Oh my gash it's ${guild.name} that's my favorite rapman!`);
});

bot.generateInvite("[ADMINISTRATOR]");
console.log("Oh hey there buddy, have you checked out my invite yet?!");
}); 

bot.on("message", message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    var args = message.content.substring(prefix.length).split(" ");
    
    switch (args[0].toLowerCase()) {

    case "ping":
     message.reply(`pong \`${Date.now() - message.createdTimestamp} ms\``);    
     break;
    } 
if(message.content === (prefix + "hello")) {
    message.reply("Oh hay there guy! It's me yor best frend Cal!")
}
});

bot.login(token);