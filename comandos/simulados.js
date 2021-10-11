const Discord = require("discord.js")
const DiscordBuildes = require("@discordjs/builders")
module.exports = {
    data: new DiscordBuildes.SlashCommandBuilder()
        .setName("simulados")
        .setDescription("Este comando serve para você testar os seus conhecimentos")
        .addStringOption(option => option.setName('disciplina').setDescription('Me diga qual a disciplica')),

    async execute(interaction) {

        const disciplica = interaction.options.getString('disciplina');

        if (disciplica == "português" || disciplica == "lplb" || disciplica == "portugues") {

            function selecionar() {

                let quiz = require("./simulados/lplb.json")
                const item = quiz[Math.floor(Math.random() * quiz.length)];
                return item
            }

            const filter = () => true

            let res = []
            let ans = []
            let pontos = 0

            let item = selecionar()

            ans.push(item.answers)
            interaction.reply("**Orientações para o simulado ** \n 1 - Serão 5 questões objetivas de diferentes provas e simulados \n 2 - Não há tempo limite para resposta, mas tente responder em 3 minutos \n 3 - Boa sorte!")
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
                                                                                                .setDescription(`Parabéns por concluir o simulado. Suas respostas foram ${res.toString()} e o gabarito das questões eram ${ans.toString()}`)
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

        } else if (disciplica == "matemática" || disciplica == "mat" || disciplica == "matematica") {

            function selecionar() {

                let quiz = require("./simulados/mat.json")
                const item = quiz[Math.floor(Math.random() * quiz.length)];
                return item
            }

            const filter = () => true

            let res = []
            let ans = []
            let pontos = 0

            let item = selecionar()

            ans.push(item.answers)
            interaction.reply("**Orientações para o simulado ** \n 1 - Serão 5 questões de diferentes provas e simulados \n 2 - Não há tempo limite para resposta, mas tente responder em 3 minutos \n 3 - Boa sorte!")
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
                                                                                                .setDescription(`Parabéns por concluir o simulado. Suas respostas foram ${res.toString()} e o gabarito das questões eram ${ans.toString()}`)
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
        else {
            interaction.reply(`Olá ${interaction.user.tag}!Como vai você? \n Para iniciar o simulado, por favor diga qual a disciplica. \n As opções disponíveis atualmente são: \n -lplb \n -mat`)
        }

    }
}