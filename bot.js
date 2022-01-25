console.log('sheeesh');

const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()


client.on('ready',readyDiscord);
function readyDiscord() {
    console.log('wesh c wao ?');
}

client.on('message',Message);

function Message(message){
    console.log(message.content);
    if (message.content === 'c ki'){
        message.reply('c Wao')
    }
}


client.login(process.env.TOKEN);