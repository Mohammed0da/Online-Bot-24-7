const { Client, GatewayIntentBits } = require('discord.js');
const { keep_alive } = require("./keep_alive");
const client = new Client({ intents: [GatewayIntentBits.Guilds] }); 

client.once('ready', () => { 
        console.log('Ready!');
});

client.login(process.env.token)
