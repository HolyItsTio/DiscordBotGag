const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log("No errors?");
});

client.on("messageCreate", (messageClass) => {
  console.log(messageClass.content.toLowerCase())
  if (messageClass.content.toLowerCase().indexOf("update") > -1) {
    messageClass.channel.send(
      `<@${process.env.snowflake}> We are vewy sowwy for your huge loss of 30 minutes.`
    );
  }
});

client.login(`${process.env.token}`);
