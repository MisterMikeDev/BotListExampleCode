const Discord = require('discord.js')

module.exports = {
    name: "messageCreate",
    run: async(client, message) => {
        let Prefix = "kei!"
        if (message.author.bot)
            return;
        if (!message.content.startsWith(Prefix))
            return;
        const args = message.content
            .slice(Prefix.length)
            .trim()
            .split(/ +/g);
        const command = args
            .shift()
            .toLowerCase();
        let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
        if (cmd) {
            cmd.execute(client, message, args)
        }
    }
}