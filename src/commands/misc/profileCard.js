// const { EmbedBuilder, ApplicationCommandOptionType } = require('discord.js');


// module.exports  = {
//     name: 'profile',
//     description: 'Check user\'s profile',
//     options: [
//         {
//             name : 'user',
//             description: 'Display a user\'s profile!',
//             type: ApplicationCommandOptionType.Mentionable,
//             required: false
//         }
//     ],

//     callback: async (client, interaction) => {

//         const userOption = interaction.options.getUser('user');


//         let user;

//         if(userOption){
//             user = userOption;
//         }else{
//             user = interaction.user;
//         }

//         //Get user avatar as well
//         const avatarImage = user.displayAvatarURL({
//             format: 'png',
//             size: 4096;
//         });

//         const embed = new EmbedBuilder().setColor(0xba68c8).


//     };

// }