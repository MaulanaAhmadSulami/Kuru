module.exports = (client) => {
  client.on("messageCreate", (message) => {
    // if (!interaction.isChatInputCommand()) return;
    if (message.author.bot) return;

    if (message.content.toLowerCase() === "indihome") {
      //only send messages
      message.channel.send(
        "https://i.gyazo.com/6f9b46d52eddec41ff4cf2ba5ea93e5c.mp4"
      );
    } else if (message.content.toLowerCase() === "tidur") {
      //mention the user
      message.reply("https://imgur.com/h5QkWLm");
    } else if (message.content.toLowerCase() === "kaede") {
      message.reply(
        "https://cdn.discordapp.com/attachments/881417252505800775/1168586127075192933/image.png?ex=65524da3&is=653fd8a3&hm=421a0bbb27190e34063f0ede0f26d8d07f6d74959b203fa0607eec92700bf617&"
      );
    }
  });
};
