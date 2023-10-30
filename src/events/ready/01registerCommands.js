const areCommandsDifferent = require("../../utils/areCommandsDifferent");
const getApplicationCommands = require("../../utils/getApplicationCommands");
const getLocalCommands = require("../../utils/getLocalCommands");

module.exports = async (client) => {
  try {
    const localCommands = getLocalCommands();
    const applicationCommands = await getApplicationCommands(
      client,
    );

    for (const localCommand of localCommands) {
      const { name, description, options } = localCommand;

      const existingCommand = await applicationCommands.cache.find(
        (cmd) => cmd.name === name
      );

      //Delete a command
      if (existingCommand) {
        if (localCommand.deleted) {
          await applicationCommands.delete(existingCommand.id);
          console.log(`Deleted the command "${name}"`);
          continue;
        }

        if (areCommandsDifferent(existingCommand, localCommand)) {
          await applicationCommands.edit(existingCommand.id, {
            description,
            options,
          });

          console.log(`Edited a command "${name}."`);
        }
      } else {
        if (localCommand.deleted) {
          console.log(
            `Skipping registering Command "${name}" as it's set to be deleted.`
          );
          continue;
        }

        if (!name || !description) {
            console.error(`Command missing required fields! Check the command object:`, localCommand);
            continue;
          }
          
        await applicationCommands.create({
          name,
          description,
          options,
        });

        console.log(`Command has been registered successfully "${name}."`);
      }
    }
  } catch (error) {
    console.log(`there was an error: ${error}`);
  }
};
