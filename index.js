require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN);


client.once('ready', () => {
	console.log('Good to go, boss!');
});


client.on('message', message => {
	// console.log(message.createdTimestamp);
	if (message.content.includes('>goshamebot')) {
        // message.channel.createWebhook("Example Webhook", "https://i.imgur.com/p2qNFag.png")
        message.channel.createWebhook('Snek', {
            avatar: 'https://i.imgur.com/mI8XcpG.jpg',
            reason: 'Needed a cool new Webhook'
        })
            .then(console.log)
            .catch(console.error)

    }
    
    if (message.author.bot) return;
    message.channel.send('shamebo activatio');
});


// client.on('message', message => {
//     if (message.author.bot) return;

//     //if block triggers a 30s timeout where the author will be shamed if they type anything
//     if (message.content.toLowerCase().includes('vampire')) 
//     {
//         const author = message.author.username;
//         console.log(author, 'out of loop')

//         let looping = true;
//         client.on('message', message => {
//             console.log(author, 'in loop')
//             if (message.author.bot) return;
//             if (looping && author === message.author.username) 
//             {message.reply('SHAME')}
//         })

//         client.setTimeout( () => {
//             looping = false
//             console.log(looping)}, 30000);

//     };

//     //assigns a role to the message author
//     if (message.content.includes('!nandor'))
//     {
//         message.member.roles.add(message.guild.roles.cache.get('834165908913913867'))
//         console.log(message.guild.roles.cache)
//     }

// });