const { Client, GatewayIntentBits, ActivityType } = require("discord.js");

module.exports = (client) => {
  console.log(`😄 ${client.user.username} is online!`);

  client.user.setPresence({
    activities: [
      { name: "Kururing~", type: ActivityType.Playing, status: "online" },
    ],
  });
};
