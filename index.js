const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"
const token = process.env.welcometoken;
var jimp = require('jimp');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', async member => {
  let font = await jimp.loadFont(jimp.FONT_SANS_32_BLACK);
  let font64 = await jimp.loadFont(jimp.FONT_SANS_64_BLACK);
  let mask = await jimp.read('https://cdn.discordapp.com/attachments/486658420951482400/559804479432687617/Mask.png');
  let welcome = await jimp.read('https://cdn.discordapp.com/attachments/486658420951482400/559882154092396585/w5.png');

  jimp.read(member.user.displayAvatarURL).then(avatar => {
    avatar.resize(318, 317);
    mask.resize(318, 317);
    avatar.mask(mask);

  welcome.print(font64, 378, 165, member.user.username);
  welcome.composite(avatar, 43, 38).write('Welcome2.png');
  member.guild.channels.get('486352456587149313').send(`**Hey** ${member}, **welcome to** 🔥 RedHELL 🔥**!** **Please read** <#486354595832922112> **and pick your roles in** <#486495573642444800> **Do not forget to do your introduction in** <#486359581484777482> **!**`, { files: ["Welcome2.png"] });
  console.log('Image sent!');
  })
  .catch(err => {
  console.log('error sending the avatar');
})
});

client.login(token).catch(err => console.log(err));
