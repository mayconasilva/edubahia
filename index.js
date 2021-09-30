const { Client, Intents, Guild, Message, Collection, MessageActionRow, MessageButton } = require('discord.js');

const client = new Client({ intents: 32767 });
const config = require("./config.json");

client.once("ready", () => {
  console.log('Vinde Espírito Santo, enchei os corações dos vossos fiéis e acendei neles o fogo do Vosso Amor. Enviai o Vosso Espírito e tudo será criado e renovareis a face da terra. \n Oremos: Ó Deus que instruíste os corações dos vossos fiéis, com a luz do Espírito Santo, fazei que apreciemos retamente todas as coisas segundo o mesmo Espírito e gozemos da sua consolação.Por Cristo Senhor Nosso. Amém.')
  console.log(`A aula começou!`)
  console.log(`O bot foi iniciado com ${client.users.cache.size} usuários em ${client.guilds.cache.size} servidores.`)

  client.user.setPresence({ game: { name: 'comando', type: 1, url: ''} });
  client.user.setActivity(`Estudando com você!`)

})

client.on ("guildCreate", s => {
  console.log(`O bot foi adicionado da guild ${s.name}`)
})

client.on("guildDelete", a =>{
  console.log(`O bot foi removido da guild ${a.name}`)
})

client.on("messageCreate", async message => {
  if (message.author.bot) return; //ignorar mensagem de bots
  if (!message.content.startsWith(config.prefix)) return; //ignorar mensagem que não sejam iniciadas pelo prefixo 'p!'
  const args = message.content
    .trim().slice(config.prefix.length)
    .split(/ +/g);
  const comando = args.shift().toLowerCase()
  try {
    const comandoFile = require(`./comando/${comando}.js`)
    comandoFile.run(client, message, args);

  } catch (err) {
    console.error("Erro" + err)
    message.channel.send("Ops, Não tenho esse comando. Tem certeza que era isso que você queria? \n **Atenção, alguns comandos foram removidos para serem modificados ou não estarão no bot novamente devido a bugs.**")
  } //comadno handler

})

client.login(config.token)

