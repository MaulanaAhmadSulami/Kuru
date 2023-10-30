const { EmbedBuilder, ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Check user\'s avatar',
    options: [
        {
            name: 'user',
            description: 'Display a user\'s avatar!',
            type: ApplicationCommandOptionType.Mentionable,
            required: false
        }
    ],
    callback: async (client, interaction) => {
        // Get the user option from interaction
        const userOption = interaction.options.getUser('user');
        
        let user;

        if (userOption) {
            user = userOption;
        } else {
            user = interaction.user;
        }

        const avatarURL = user.displayAvatarURL({
            format: 'png',
            size: 4096
        });

        const embed = new EmbedBuilder()
            .setColor(0xba68c8)
            .setTitle(`${user.tag}'s Avatar`)
            .setImage(avatarURL)
            .setURL(avatarURL);

        await interaction.reply({ embeds: [embed] });
    }
};
