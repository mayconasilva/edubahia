const Discord = require('discord.js')


module.exports.run = async (client, message, args) => {
  let embed = new Discord.MessageEmbed()
    .setColor('#0B00C8')
    .setThumbnail('https://live.staticflickr.com/65535/51576757793_79a2e2850e_n.jpg')
    .setTitle('Meus Comandos')
    .addField("\u200b", "p!add - Esse comando irá te retornar a tabuada da adição do número informado")
    .addField("\u200b", "p!sub - Esse comando irá te retornar a tabuada da subtração do número informado")
    .addField("\u200b", "p!mult - Esse comando irá te retornar a tabuada da multiplicação do número informado")
    .addField("\u200b", "p!donate - Quer ajudar o projeto? Esse comando irá te mostrar o meu pix")
    .addField("\u200b", "p!fatorial - Esse comando irá te retornar o fatorial do número informado")
    .addField("\u200b", "p!ping - Esse comando irá te retornar a latência")
    .addField("\u200b", "p!div - Esse comando irá te retornar a tabuada da divisão do número informado")
    .setFooter(`2021 © ${client.user.username}.`)
    .setTimestamp()

  message.channel.send({ embeds: [embed] })
}