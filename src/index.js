require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');
const eventHandlers = require('./handlers/eventHandlers');
const handleInteractions = require('./commands/funsies/replyRaka');
// const handleInteractionsSleep = require('./commands/funsies/sleepySleep');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

eventHandlers(client);
handleInteractions(client);
// handleInteractionsSleep(client);

client.login(process.env.TOKEN);
