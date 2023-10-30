// const {
//     Client,
//     Interaction,
//     ApplicationCommandOptionType,
//     PermissionFlagsBits,
//   } = require("discord.js");
  
//   module.exports = {
//     /**
//      *
//      * @param {Client} client
//      * @param {Interaction} interaction
//      */
  
//     callback: async (client, interaction) => {
//       const targetUserId = interaction.options.get("target-user").value;
//       const reason =
//         interaction.options.get("reason")?.value || "No reason provided";
  
//       await interaction.deferReply({ ephemeral: false });
  
//       const targetUser = await interaction.guild.members.fetch(targetUserId);
  
//       if (!targetUser) {
//         await interaction.editReply("User doesn't exist in server.");
//         return;
//       }
  
//       if (targetUser.id === interaction.guild.ownerId) {
//         await interaction.editReply("You can't mute the server owner silly!.");
//         return;
//       }
  
//       const targetUserRolePosition = targetUser.roles.highest.position; // Highest role of the target user
//       const requestUserRolePosition = interaction.member.roles.highest.position; // Highest role of the user running the cmd
//       const botRolePosition = interaction.guild.members.me.roles.highest.position; // Highest role of the bot
  
//       if (targetUserRolePosition >= requestUserRolePosition) {
//         await interaction.editReply(
//           "You can't mute that user because they have the same or higher role than you."
//         );
//         return;
//       }
  
//       if (targetUserRolePosition >= botRolePosition) {
//         await interaction.editReply(
//           "Kuru can't mute the user because they have the same or higher role than me."
//         );
//         return;
//       }
  
//       try {
//         const member = member.timeout(60_000);
//         await targetUser.timeout({ reason });
//         await interaction.editReply(
//           `User ${targetUser} was muted for ${member.timeout(60_000)} \nReason: ${reason}`
//         );
//       } catch (error) {
//         console.log(`There was an error when trying to mute the user: ${error}`);
//       }
//     },
  
//     name: "mute",
//     description: "put a member from this server to a timeout.",
//     options: [
//       {
//         name: "target-user",
//         description: "The user you want to put to a timeout.",
//         type: ApplicationCommandOptionType.Mentionable,
//         required: true,
//       },
//       {
//         name: "reason",
//         description: "The reason you want to mute.",
//         type: ApplicationCommandOptionType.String,
//       },
//     ],
//     // permissionsRequired: [PermissionFlagsBits.BanMembers],
//     // botPermissions: [PermissionFlagsBits.BanMembers],
//   };
  