module.exports = {
  name: "ping",
  description: "check Kuru\'s response time",

  callback: async (client, interaction) => {
    await interaction.deferReply();

    const reply = await interaction.fetchReply();

    const ping = reply.createdTimestamp - interaction.createdTimestamp;

    

    interaction.editReply(`🍥 Pong! - Kuru response time is ${ping}ms`);
  },
};
