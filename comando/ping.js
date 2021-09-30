const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
      const sayMessage = args.join("ping");
      
      message.channel.send(`Pong! A Latência é ${client.ws.ping}ms.`); //mensagem de ping
        
      }