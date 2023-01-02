module.exports = (client) => {
  const channelId = "1059553527086723122";
  const roleChannel = "1059547764792492034";
  client.on("guildMemberAdd", (member) => {
    console.log(member);

    const message = `**Selamat datang <@${
      member.id
    }> di server ESD Research Laboratory! 🎉🎉 Jangan lupa ambil role kalian di  ${member.guild.channels.cache
      .get(roleChannel)
      .toString()}**`;

    const channel = member.guild.channels.cache.get(channelId);
    channel.send(message);
  });
};