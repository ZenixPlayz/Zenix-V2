require("dotenv").config();

const {
  Client,
  GatewayIntentBits,
  Events
} = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds
  ]
});

client.once(Events.ClientReady, (bot) => {
  console.log("=================================");
  console.log("       ZENIX V2 IS ONLINE");
  console.log("=================================");
  console.log(`Bot: ${bot.user.tag}`);
  console.log(`Servers: ${bot.guilds.cache.size}`);
  console.log("Status: Online");
  console.log("=================================");
});

client.on(Events.Error, (error) => {
  console.error("Discord client error:", error);
});

if (!process.env.DISCORD_TOKEN) {
  console.error("❌ DISCORD_TOKEN is missing!");
  process.exit(1);
}

client.login(process.env.DISCORD_TOKEN);
