const { SlashCommandBuilder } = require('@discordjs/builders')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Muestro mi ping.'),
    async run(client, interaction) {
        interaction.reply({
            content: `Mi ping es ${client.ws.ping}`
        })
    }
}