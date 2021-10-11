const { Client, Intents, Guild, Message, Collection, MessageActionRow, MessageButton } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const fs = require('fs');


const client = new Client({ intents: 32767 });
const config = require("./config.json");

const comma = []
client.commands = new Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./comandos/${file}`);
	client.commands.set(command.data.name, command);
  comma.push(command.data.toJSON());
  console.log(`Comando ${command.data.name} carregado`)
}

const rest = new REST({ version: '9' }).setToken(config.token);

(async () => {
	try {
		console.log('Iniciando carregamento dos comandos slash');

		await rest.put(
			Routes.applicationGuildCommands(config.clientId, config.serverId),
			{ body: comma },
		);
    

		console.log('Os comandos foram carregados com sucesso');
	} catch (error) {
		console.error(error);
	}
})();

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

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);
  //pode tirarm, só para verificação

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		return interaction.reply({ content: 'Desculpe-me, não foi possivel realizar esse comando', ephemeral: true });
	}
});

client.login(config.token)

