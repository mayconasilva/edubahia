const Discord = require("discord.js")
const DiscordBuildes = require("@discordjs/builders")



module.exports = {
    data: new DiscordBuildes.SlashCommandBuilder()
        .setName('tabperiodica')
        .setDescription('Esse comando irá mostrar a tabela periodica')
        .addNumberOption(option => option.setName('elementos').setDescription('Me diga qual o número atômico do elemento que deseja e irie te mostar algumas informações')),
    async execute(interaction) {

        const elemento = interaction.options.getNumber('elementos');
        if (!elemento) {

            function selecionar() {

                let quiz = require("./outros/periodica.json")
                let item = quiz[Math.floor(Math.random() * quiz.length)];
                return item
            }

            let item = await selecionar()
            let nome = item.nome
            let descricao = item.Curiosidades
            let z = item.Z
            let e = item.E
            let a = item.A
            let ee = item.Encontrananatureza
            let en = item.Estadonanatureza
            let pf = item.PF
            let pe = item.PE
            let ap = item.Aparencia
            let ce = item.configeletronica

            let embed = new Discord.MessageEmbed()
                .setTitle(nome)
                .setImage(item.img)
                .setThumbnail(item.simbolo)
                .setDescription(descricao)
                .addField("Número eletrônico:", z)
                .addField("Número de eletron:", e)
                .addField("Massa atômica:", a)
                .addFields(
                    { name: "Encontra na natureza:", value: ee, inline: true },
                    { name: "Estado na natureza:", value: en, inline: true }
                )
                .addField("Ponto de fusão:", pf)
                .addField("Ponto de ebulição:", pe)
                .addField("Aparência:", ap)
                .addField("Configuração Eletrônica", ce)
                .setColor('#0B00C8')
                .setFooter(`2021© @EDUBAHIA#1388`)
            await interaction.reply({ embeds: [embed] });
        } else {
            let tabele = require("./outros/periodica.json")

            let item = tabele.find(item => item.Z == elemento)

            let nome = item.nome
            let descricao = item.Curiosidades
            let z = item.Z
            let e = item.E
            let a = item.A
            let ee = item.Encontrananatureza
            let en = item.Estadonanatureza
            let pf = item.PF
            let pe = item.PE
            let ap = item.Aparencia
            let ce = item.configeletronica

            let embed = new Discord.MessageEmbed()
                .setTitle(nome)
                .setImage(item.img)
                .setThumbnail(item.simbolo)
                .setDescription(descricao)
                .addField("Número eletrônico:", z)
                .addField("Número de eletron:", e)
                .addField("Massa atômica:", a)
                .addFields(
                    { name: "Encontra na natureza:", value: ee, inline: true },
                    { name: "Estado na natureza:", value: en, inline: true }
                )
                .addField("Ponto de fusão:", pf)
                .addField("Ponto de ebulição:", pe)
                .addField("Aparência:", ap)
                .addField("Configuração Eletrônica", ce)
                .setColor('#0B00C8')
                .setFooter(`2021© @EDUBAHIA#1388`)
            await interaction.reply({ embeds: [embed] });
        }
    },
};