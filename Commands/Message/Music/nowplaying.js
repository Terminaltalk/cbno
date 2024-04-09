const { Message, EmbedBuilder, PermissionFlagsBits } = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "nowplaying",
  aliases: ["np"],
  description: `see what is playing now`,
  userPermissions: PermissionFlagsBits.Connect,
  botPermissions: PermissionFlagsBits.Connect,
  category: "Music",
  cooldown: 5,
  inVoiceChannel: false,
  inSameVoiceChannel: false,
  Player: true,
  djOnly: false,

  /**
   *
   * @param {JUGNU} client
   * @param {Message} message
   * @param {String[]} args
   * @param {String} prefix
   * @param {Queue} queue
   */
  run: async (client, message, args, prefix, queue) => {
    // Code
    let song = queue.songs[0];

    message.reply({
      embeds: [
        new EmbedBuilder()
          .setColor(client.config.embed.color)
          .setThumbnail(song.thumbnail)
          .setAuthor({
            name: `Now Playing`,
            iconURL: "https://cdn.discordapp.com/attachments/1216051387666927656/1216123606380052601/image-removebg-preview-modified.png?ex=65ff3e5e&is=65ecc95e&hm=9c836286919b5769a164d5e7d06d11e4843af432  9290b417e99ab681a39496a6&",
            url: song.url,
          })
          .setDescription(`** [${song.name}](${song.streamURL}) **`)
          .addFields([
            {
              name: `** Duration **`,
              value: ` \`${queue.formattedCurrentTime}/${song.formattedDuration} \``,
              inline: true,
            },
            {
              name: `** Requested By **`,
              value: ` \`${song.user.tag} \``,
              inline: true,
            },
            {
              name: `** Author **`,
              iconURL:"https://cdn.discordapp.com/attachments/1216051387666927656/1216095437946228807/image-removebg-preview-removebg-preview.png?ex=65ff2422&is=65ecaf22&hm=3175d083ca9c55c2327d2c9a9d3437675eb2f56d  12adf8747a8b33f19116e389&",
              value: `
              \`${song.uploader.name}\``,
              inline: true,
            },
          ])
          .setFooter(client.getFooter(message.author)),
      ],
    });
  },
};
