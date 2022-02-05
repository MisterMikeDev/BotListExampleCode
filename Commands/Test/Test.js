const Discord = require('discord.js')

module.exports = {
    name: "ping",
    alias: ["latency"],
    async execute(client, message, args) {
        message.channel.send({
            content: `Mi ping es ${client.ws.ping}`
        })
    }
}