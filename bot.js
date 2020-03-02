const Discord = require('discord.js');
const client = new Discord.client();

client.login("NjgzNjc1NTY3NzQ0NDgzNTgw.Xl0-nA.MitRCvTIt9YFw_BOdj7wxT9Sh60");

client.on('ready', () =>{
  console.log("The Bot Is Logged In!");
});

client.on('message',message => {
  if(message.author.bot)
    return;

    if(message.content.toLowerCase() === 'hello')
    message.channel.send("Hey!");
  });
