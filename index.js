require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('lets go guillermo');
});

client.login(process.env.TOKEN);


client.on('message', message => {
    if (message.author.bot) return;
    if (message.content.toLowerCase().includes('vampire')) 
    {
        const author = message.author.username;
        console.log(author, 'out of loop')

        let looping = true;
        client.on('message', message => {
            console.log(author, 'in loop')
            if (message.author.bot) return;
            if (looping && author === message.author.username) 
            {message.reply('SHAME')}
        })

        client.setTimeout( () => {
            looping = false
            console.log(looping)}, 30000);

    };

});