const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    let fatorial = args.join(" ");
let resultado = fatorial;
	for (var i = 1; i < fatorial; i++) {
		resultado *= i;
	}
	res = resultado.toString()
	let embed = new Discord.MessageEmbed()
    .setColor('#0B00C8')
	.setTitle(`*Fatorial de ${fatorial}*`)
    .addField("\u200b", res)
	message.channel.send({ embeds: [embed] })
}