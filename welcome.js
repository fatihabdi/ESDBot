module.exports = (client) => {
  const channelId = "1059553527086723122";
  const rulesChannel = "1059551400360677528";
  client.on("guildMemberAdd", (member) => {
    console.log(member);

    const message = `**Selamat datang <@${
      member.id
    }> di server ESD Research Laboratory! 🎉🎉 Jangan lupa baca baik-baik rulesnya di  ${member.guild.channels.cache
      .get(rulesChannel)
      .toString()}**`;

    const channel = member.guild.channels.cache.get(channelId);
    channel.send(message);
  });
};