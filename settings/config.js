module.exports = {
  TOKEN: process.env.TOKEN || "MTEwNTE5MDM4NTkyNTQ5Mjc0OA.Gu52dK.Co2b7XghW6MYT2AB8UbGzbUQTcnEMFHSTTW-6k",
  PREFIX: process.env.PREFIX || "?",
  embed: {
    color: process.env.color || "#cbcbcb",
    wrongcolor: process.env.wrongcolor || "#8a0808",
    footertext: "Coded By fm.44 | Cybeno",
  },
  emoji: {
    ERROR: "❌",
    SUCCESS: "✅",
    disabled: "🔴",
    enabled: "🟢",
    cleared: "🧹",
    time: "⏲️",
    search: "https://cdn.discordapp.com/attachments/1216051387666927656/1216381647675719732/image.png?ex=66002eb0&is=65edb9b0&hm=05b0bd015634860f977a88d5a34094830a1b5233  6e81d079ea8133d974d3e5ba&",
    ping: "🏓",
    bot: "🤖",
    pause_resume: "<:pr:1216383743598526667>",
    skip: "<:skip:1216383535082897418>",
    loop: "<:loop:1216384273670737991>",
    stop: "<:stop:1197857618698436618>",
    autoplay: ":autoplay:1216383550891233350>  ",
  },
  // others
  mongodb: process.env.MONGO_URL || "MONGO_URL",
  filters: {
    clear: "dynaudnorm=f=200",
    lightbass: "bass=g=8,dynaudnorm=f=200",
    heavybass: "bass=g=20,dynaudnorm=f=200",
    bassboost: "bass=g=8,dynaudnorm=f=200",
    custombassboost: "bass=g=1,dynaudnorm=f=200",
    customspeed: "atempo=1.0",
    purebass: "bass=g=20,dynaudnorm=f=200,asubboost",
    "8d": "apulsator=hz=0.08",
    vaporwave: "aresample=48000,asetrate=48000*0.8",
    nightcore: "aresample=48000,asetrate=48000*1.25",
    phaser: "aphaser=in_gain=0.4",
    tremolo: "tremolo",
    vibrato: "vibrato=f=6.5",
    reverse: "areverse",
    treble: "treble=g=5",
    surrounding: "surround",
    pulsator: "apulsator=hz=1",
    subboost: "asubboost",
    karaoke: "stereotools=mlev=0.03",
    flanger: "flanger",
    gate: "agate",
    haas: "haas",
    mcompand: "mcompand",
    earrape: "bass=g=50",
    bassboost1: "bass=g=1,dynaudnorm=f=200",
    bassboost2: "bass=g=2,dynaudnorm=f=200",
    bassboost3: "bass=g=3,dynaudnorm=f=200",
    bassboost4: "bass=g=4,dynaudnorm=f=200",
    bassboost5: "bass=g=5,dynaudnorm=f=200",
    bassboost6: "bass=g=6,dynaudnorm=f=200",
    bassboost7: "bass=g=7,dynaudnorm=f=200",
    bassboost8: "bass=g=8,dynaudnorm=f=200",
    bassboost9: "bass=g=9,dynaudnorm=f=200",
    bassboost10: "bass=g=10,dynaudnorm=f=200",
    bassboost11: "bass=g=11,dynaudnorm=f=200",
    bassboost12: "bass=g=12,dynaudnorm=f=200",
    bassboost13: "bass=g=13,dynaudnorm=f=200",
    bassboost14: "bass=g=17,dynaudnorm=f=200",
    bassboost15: "bass=g=15,dynaudnorm=f=200",
    bassboost16: "bass=g=16,dynaudnorm=f=200",
    bassboost17: "bass=g=17,dynaudnorm=f=200",
    bassboost18: "bass=g=18,dynaudnorm=f=200",
    bassboost19: "bass=g=19,dynaudnorm=f=200",
    bassboost20: "bass=g=20,dynaudnorm=f=200",
  },
  links: {
    inviteURL:
      process.env.inviteURL ||
      `https://discord.com/api/oauth2/authorize?client_id=1105190385925492748&permissions=8&scope=bot%20applications.commands`,
    DiscordServer: process.env.DiscordServer || `https://discord.gg/KRWckbvCft`,
    VoteURL: process.env.VoteURL || `/`,
    Website: `/`,
  },
  options: {
    embedFooter: true,
    nowplayingMsg: true,
    defaultVolume: 69,
  },
  numberEmojis: [
    `0️⃣`,
    `1️⃣`,
    `2️⃣`,
    `3️⃣`,
    `4️⃣`,
    `5️⃣`,
    `6️⃣`,
    `7️⃣`,
    `8️⃣`,
    `9️⃣`,
    `🔟`,
  ],
  slash: {
    global: false,
    guildID: process.env.GUILD_ID || "1215746414827540490", // for slash command
  },
};

