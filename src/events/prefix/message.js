const PREFIX = "k!";
// const pingCommand = require('../misc/pingPrefix.js');

module.exports = (client) => {
  client.on("messageCreate", (message) => {
    const mentionedUsers = message.mentions.users;

    let formattedContent = message.content;
    mentionedUsers.forEach((user) => {
      const mentionRegex = new RegExp(`<@!?${user.id}>`, "g");
      formattedContent = formattedContent.replace(
        mentionRegex,
        `@${user.username}`
      );
    });

    console.log(
      `Received a message in channel #${message.channel.name} - ${message.author.username}: ${formattedContent}`
    );

    if (message.author.bot) return;
    if (!message.content.startsWith(PREFIX)) return;

    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);

    if (!command) return;

    if (command) {
      try {
        customPrefixCommand.execute(message, args);
      } catch (error) {
        console.error(error.message);
        message.reply("There was an error executing that command.");
      }
    }
  });

  // client.commands.set(pingCommand.name, pingCommand);
};
