const JUGNU = require("./handlers/Client");
const { TOKEN } = require("./settings/config");

const client = new JUGNU();

module.exports = client;

client.start("MTEwNTE5MDM4NTkyNTQ5Mjc0OA.Gu52dK.Co2b7XghW6MYT2AB8UbGzbUQTcnEMFHSTTW-6k");
