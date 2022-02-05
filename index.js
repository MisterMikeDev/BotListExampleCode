console.clear()
const Discord = require('discord.js')
require('dotenv').config()
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})
require('./MongoDB.js')
const { readdirSync } = require('fs');
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
/* Command Handler */
readdirSync('./Commands').forEach(async(subCarpetas) => {
        readdirSync(`./Commands/${subCarpetas}`).map((commands) => {
            let command = require(`./Commands/${subCarpetas}/${commands}`)
            client.commands.set(
                command.name,
                command
            )
        })
    })
    /* SlashCommand Handler */
client.slashcommands = new Discord.Collection();
require("./SlashCommands.js")
readdirSync('./SlashCommands').forEach(async(categorys) => {
        const commandFilesSlash = readdirSync(`./SlashCommands/${categorys}`).filter((archivo) => archivo.endsWith('js'))
        for (const archivo of commandFilesSlash) {
            const command = require(`./SlashCommands/${categorys}/${archivo}`)
            client.slashcommands.set(
                command.data.name,
                command
            )
        }
    })
    /* Event Handler */
for (const file of readdirSync('./Events')) {
    if (file.endsWith('.js')) {
        let event = require(`./Events/${file}`)
        client.events.set(
            event.name,
            event
        )
        client.on(
            event.name,
            event.run.bind(null, client)
        )
    }
}
client.login(process.env.Token)