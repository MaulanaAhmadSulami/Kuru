const PREFIX = "k!";
// const pingCommand = require('../misc/pingPrefix.js');

module.exports = (client) => {
  client.on("messageCreate", (message) => {
    console.log(`Received a message: ${message.content}`);
    if (message.author.bot) return; // Ignore other bots.
    if (!message.content.startsWith(PREFIX)) return; // If not the correct prefix, ignore.

    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);

    if (!command) return; // If command doesn't exist, ignore.

    const customPrefixCommand = client.commands.get(commandName);

    if (customPrefixCommand) {
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
