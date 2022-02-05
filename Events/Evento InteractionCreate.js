module.exports = {
    name: "interactionCreate",
    run: async(client, interaction) => {
        if (interaction.isCommand()) {
            const slashcmd = client.slashcommands.get(interaction.commandName)
            if (!slashcmd) return;
            try {
                await slashcmd.run(
                    client,
                    interaction
                )
            } catch (e) {
                console.log(e)
            }
        }
    }
}