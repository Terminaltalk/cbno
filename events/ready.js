const { ActivityType, Presence } = require("discord.js");
const client = require("../index");

client.on("ready", async () => {
  console.log(`El bot eshta 3ala kolo`);
  client.user.setActivity({
    name: `?help | /help`,
    type: ActivityType.Streaming,
    url: "https://www.twitch.tv/3azeer"
  });

  client.user.setStatus("Streming");

  // loading database
  await require("../handlers/Database")(client);

  // loading dashboard
  require("../server");

  client.guilds.cache.forEach(async (guild) => {
    await client.updateembed(client, guild);
  });
});