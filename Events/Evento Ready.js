const Discord = require('discord.js')

module.exports = {
    name: "ready",
    run: async(client) => {
        console.log(`${client.user.tag} encendido.`)
    }
}