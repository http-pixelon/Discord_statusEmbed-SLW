const usersToCheck = [
  { id: '78466034930718063869', name: 'PXNB' },
  { id: '93284960753489001918', name: 'CAROL' },
  { id: '96780798541408173924', name: 'JK' },
];

client.on('ready', () => {

  const checkUsersStatus = () => {
    const embed = new Discord.MessageEmbed();
    embed.setTitle('Status | SLW 001');
    embed.setDescription('');
    let embedIsValid = false;
    usersToCheck.forEach((user) => {
      const member = client.guilds.cache
        .get('106330655380094526555')
        .members.cache.get(user.id);

      let status = '';
      if (!member) {
  status = 'Membro não encontrado';
} else {
      if (member.presence.status === 'online') {
  status = 'Disponível';
} else if (member.presence.status === 'dnd') {
  status = 'Ocupado';
} else if (member.presence.status === 'idle') {
  status = 'Ausente';
} else if (member.presence.status === 'invisible') {
  status = 'Indisponível';
}
      }

      embed.addField(user.name, status, true);
      embedIsValid = true;
    });

    if (!embedIsValid) return;

    client.channels.cache
      .get('107203928407867505684')
      .send({ embeds: [embed] })
      .then((sentMessage) => {
        setTimeout(checkUsersStatus, 30000); // 1000 ms * 60 sec * 3 min
        sentMessage.edit({ embeds: [embed] });
      });
  };

  checkUsersStatus();
});



const id1 = '93284096753408901918';
const id2 = '9328540940576153601';
const id3 = '96787985004148173924';
const channelId = '107239284000786755684';
const serverId = '1063365538094526555';

client.on('ready', async () => {
  console.log(`Testee ${client.user.tag}!`);
  
  const server = client.guilds.cache.get(serverId);
  const channel = server.channels.cache.get(channelId);

  const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Status | SLW 002')
    .setDescription('');

  const message = await channel.send({embeds: [embed]});

  setInterval(async () => {
    const member1 = await server.members.fetch(id1);
    const member2 = await server.members.fetch(id2);
    const member3 = await server.members.fetch(id3);

    embed.setDescription('')
      .addFields(
{ name: `${member1.user.username}`, value: `${member1.presence.status === 'dnd' ? 'Não perturbe' : (member1.presence.status === 'online' ? 'Disponível' : (member1.presence.status === 'invisible' ? 'Invisível' : 'Ausente'))}`, inline: true },
{ name: `${member2.user.username}`, value: `${member2.presence.status === 'dnd' ? 'Não perturbe' : (member2.presence.status === 'online' ? 'Disponível' : (member2.presence.status === 'offline' ? 'Invisível' : 'Ausente'))}`, inline: true },
{ name: `${member3.user.username}`, value: `${member3.presence.status === 'dnd' ? 'Não perturbe' : (member3.presence.status === 'online' ? 'Disponível' : (member3.presence.status === 'offline' ? 'Invisível' : 'Ausente'))}`, inline: true },
);
      
    message.edit({embeds: [embed]});
  }, 30000);
});

30000

