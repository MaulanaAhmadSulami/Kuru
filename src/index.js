require('dotenv').config();
const { Client, IntentsBitField, REST, Routes } = require('discord.js');
const eventHandlers = require('./handlers/eventHandlers');
const handleInteractions = require('./commands/funsies/replyRaka');
const handlePrefix = require('./events/prefix/message');
// const handleInteractionsSleep = require('./commands/funsies/sleepySleep');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});



client.commands = new Map();
client.commands.set(handlePrefix.name, handlePrefix);


// DELETE COMMAND BELLOW
//=========================================================================================
// const rest = new REST().setToken(process.env.TOKEN);

// const applicationId = '1167876256650506380'

// rest.delete(Routes.applicationCommand(applicationId, '1168618118701133894'))
// .then(() => console.log('Successfully deleted application command'))
// .catch(console.error);
//=========================================================================================


eventHandlers(client);
handleInteractions(client);
handlePrefix(client);
// handleInteractionsSleep(client);

client.login(process.env.TOKEN);
