const Discord = require("discord.js");
const client = new Discord.Client();

 client.on('ready', () => {
   console.log('I am ready!');
 });

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'general♡');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome Beautiful, ${member}...♡`);
});

client.login('NTcxMDgzMDQ4MTc1NTM0MTc3.XMdlBQ.v8m_ikpJRINPR174_0ZjMzof6fM');
