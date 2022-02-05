const { readdirSync } = require('fs')
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
const commands = []
readdirSync('./SlashCommands').forEach(async(categorys) => {
    const commandFilesSlash = readdirSync(`./SlashCommands/${categorys}`).filter((archivo) => archivo.endsWith('js'))
    for (const archivo of commandFilesSlash) {
        const command = require(`./SlashCommands/${categorys}/${archivo}`)
        commands.push(
            command.data.toJSON()
        )
    }
})
const rest = new REST({ version: '9' })
    .setToken(process.env.Token)
async function createSlash() {
    try {
        await rest.put(Routes.applicationCommands(process.env.ApplicationID), {
            body: commands
        })
        console.log("SlashCommands cargados ✅");
    } catch (e) {
        console.log("SlashCommands cargados ❌")
    }
}
createSlash()