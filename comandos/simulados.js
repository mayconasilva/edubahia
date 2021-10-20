const Discord = require("discord.js")
const DiscordBuildes = require("@discordjs/builders")

const fs = require("fs")

module.exports = {
    data: new DiscordBuildes.SlashCommandBuilder()
        .setName("simulados")
        .setDescription("Este comando serve para você testar os seus conhecimentos")
        .addStringOption(option => option.setName('disciplina').setDescription('Me diga qual a disciplica')),

    async execute(interaction) {

        const disciplica = await interaction.options.getString('disciplina');

        if (!disciplica) {

            interaction.reply("Olá, como ai você? Atualmente nós temos as seguintes opções: \n - lplb; \n -mat \n -bio \n -fis \n -qui")

        } else {

            function selecionar() {

                let quiz = require(`./simulados/${disciplica}.json`)
                const item = quiz[Math.floor(Math.random() * quiz.length)];
                return item
            }

            const filter = () => true

            let res = []
            let ans = []

            let item = selecionar()

            ans.push(item.answers)
            interaction.reply("**Orientações para o simulado ** \n 1 - Serão 5 questões (em sua maioria objetivas) de diferentes provas e simulados \n 2 - Para os pontos serem contabilizados é necessário que você escreva a letra da questão em maiúsculo. Por exemplo, a resposta certa era a letra 'a', você irá escrever apenas 'A' \n 3 - Não há tempo limite para resposta, mas tente responder em 3 minutos \n 4 - Boa sorte")
            interaction.followUp(item.question, { fetchReply: true })
                .then(() => {
                    interaction.channel.awaitMessages({ filter, max: 1 })
                        .then(m => {
                            res.push(m.map(a => a.content))
                            let item2 = selecionar()
                            ans.push(item2.answers)

                            interaction.followUp(item2.question, { fetchReply: true })
                                .then(() => {
                                    interaction.channel.awaitMessages({ filter, max: 1 })
                                        .then(r => {
                                            res.push(r.map(a => a.content))
                                            let item3 = selecionar()
                                            ans.push(item3.answers)

                                            interaction.followUp(item3.question, { fetchReply: true })
                                                .then(() => {
                                                    interaction.channel.awaitMessages({ filter, max: 1 })
                                                        .then(p => {
                                                            res.push(p.map(a => a.content))
                                                            let item4 = selecionar()
                                                            ans.push(item4.answers)

                                                            interaction.followUp(item4.question, { fetchReply: true })
                                                                .then(() => {
                                                                    interaction.channel.awaitMessages({ filter, max: 1 })
                                                                        .then(l => {
                                                                            res.push(l.map(a => a.content))
                                                                            let item5 = selecionar()
                                                                            ans.push(item5.answers)

                                                                            interaction.followUp(item5.question, { fetchReply: true })
                                                                                .then(() => {
                                                                                    interaction.channel.awaitMessages({ filter, max: 1 })
                                                                                        .then(w => {
                                                                                            res.push(w.map(a => a.content))



                                                                                            let embed = new Discord.MessageEmbed()
                                                                                                .setTitle("Resultado")
                                                                                                .setColor("#0B00C8")
                                                                                                .addFields(
                                                                                                    { name: "Suas Respostas", value: res.toString(), inline: true },
                                                                                                    {
                                                                                                        name: "Gabarito", value: ans.toString(), inline: true
                                                                                                    }
                                                                                                )
                                                                                            interaction.followUp({ embeds: [embed] })
                                                                                        })
                                                                                })
                                                                        })
                                                                })
                                                        })
                                                })

                                        })
                                }
                                )
                        })
                })

        }
    }
}