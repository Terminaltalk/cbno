require("dotenv").config();
const JUGNU = require("./handlers/Client");
const { TOKEN } = require("./settings/config");

const client = new JUGNU();

module.exports = client;

client.start(TOKEN);
