const {
    Client,
    Interaction,
    ApplicationCommandOptionType,
    PermissionFlagsBits,
  } = require("discord.js");
  
  module.exports = {
    /**
     *
     * @param {Client} client
     * @param {Interaction} interaction
     */
  
    callback: async (client, interaction) => {
      const targetUserId = interaction.options.get("target-user").value;
      const reason =
        interaction.options.get("reason")?.value || "No reason provided";
  
      await interaction.deferReply({ ephemeral: false });
  
      const targetUser = await interaction.guild.members.fetch(targetUserId);
  
      if (!targetUser) {
        await interaction.editReply("User doesn't exist in server.");
        return;
      }
  
      if (targetUser.id === interaction.guild.ownerId) {
        await interaction.editReply("You can't ban the server owner silly!.");
        return;
      }
  
      const targetUserRolePosition = targetUser.roles.highest.position; // Highest role of the target user
      const requestUserRolePosition = interaction.member.roles.highest.position; // Highest role of the user running the cmd
      const botRolePosition = interaction.guild.members.me.roles.highest.position; // Highest role of the bot
  
      if (targetUserRolePosition >= requestUserRolePosition) {
        await interaction.editReply(
          "You can't ban that user because they have the same or higher role than you."
        );
        return;
      }
  
      if (targetUserRolePosition >= botRolePosition) {
        await interaction.editReply(
          "Kuru can't ban the user because they have the same or higher role than me."
        );
        return;
      }
  
      try {
        await targetUser.ban({ reason });
        await interaction.editReply(
          `User ${targetUser} was banned\nReason: ${reason}`
        );
      } catch (error) {
        console.log(`There was an error when banning: ${error}`);
      }
    },
  
    name: "ban",
    description: "Bans a member from this server.",
    options: [
      {
        name: "target-user",
        description: "The user you want to ban.",
        type: ApplicationCommandOptionType.Mentionable,
        required: true,
      },
      {
        name: "reason",
        description: "The reason you want to ban.",
        type: ApplicationCommandOptionType.String,
      },
    ],
    permissionsRequired: [PermissionFlagsBits.BanMembers],
    botPermissions: [PermissionFlagsBits.BanMembers],
  };
  