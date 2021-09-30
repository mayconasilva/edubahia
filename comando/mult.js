const Discord = require("discord.js")
const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('tabuadamultiplicacao')
	.setDescription('Retorna a tabuada da multiplicação')
	.addStringOption(option =>
		option.setName('input')
			.setDescription('O número informado será retornado')
			.setRequired(true));
module.exports.run = async (client, message, args) => {
    const sayMessage = args.join(" ")
    let arr = []
    let num = Number(sayMessage) //informação pega do usuário
    let c = 1 //informação a ser mudada pelo c++
    let x = 10 //limite definido
    while (c <= x) {
        let res = num * c //operaçaõ
        let tab = num + 'X' + c + '=' + res
        arr.push(tab + '\n') 
        c++
        
    }
    let res = arr.toString()
   let embed = new Discord.MessageEmbed()
    .setColor('#0B00C8')
    .setTitle('**Tabuada da Multiplicação**')
    .addField("\u200b", res)
    message.channel.send({ embeds: [embed] })

}