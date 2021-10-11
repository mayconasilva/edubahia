const Discord = require('discord.js')


module.exports.run = async (client, message, args) => {
  const botAvatar = client.user.displayAvatarURL
  const date = client.user.createdAt
  const userName = client.user.username
  const usersize = client.users.cache.size
  const servesize = client.guilds.cache.size
  const inline = true
  const status = {
    online: '`🟢` Online',
    offline: '`⚫` Offline'
  }
  let embed = new Discord.MessageEmbed()
    .setColor('#0B00C8')
    .setThumbnail('https://live.staticflickr.com/65535/51576757793_79a2e2850e_n.jpg')
    .setTitle('Minhas informações')
    .addField('**Meu nick**', userName.toString())
    .addField('**Meu ID**', "885897028725526558")
    .addField('**Criado em**', '27/10/2020')
    .addFields({ name: '**Usuários**', value: usersize.toString() }, { name: '**Servidores**', value: servesize.toString(), inline: true })
    .setURL('https://mayconasilva.github.io/Projeto-Mais-Educacao/')
    .addField('**Contato:**', 'mayconasilvadeveloper@gmail.com')
    .setFooter(`2021 © ${userName.toString()}.`)
    .setTimestamp()

  message.channel.send({ embeds: [embed] })
}



