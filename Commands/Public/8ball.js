const { SlashCommandBuilder } = require(`@discordjs/builders`);
const { PermissionsBitField, EmbedBuilder } = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
  .setName("8ball")
  .setDescription('This is the classic 8ball game')
  .addStringOption(option => option.setName('question').setDescription('Your question for the 8ball.').setRequired(true)),
      

  async execute ( interaction ) {

        const {client, guild} = interaction;
        const question = interaction.options.getString("question");

        const choice =  [":8ball:| It is certian.",
        ":8ball:| Sí.",
      ":8ball:| No.",
      ":8ball:| Tal vez...",
      ":8ball:| No sé.",
      ":8ball:| Muy dudable.",
      ":8ball:| Podría ser...",
      ":8ball:| No creo.",
      ":8ball:| Sin dudas.",
      ":8ball:| Está decidido que no.",
      ":8ball:| Si, definitivamente.",
      ":8ball:| Puedes confiar en ello.",
      ":8ball:| Como lo veo, si.",
      ":8ball:| Lo mas probable.",
      ":8ball:| perspectiva.",
      ":8ball:| Los signos apuntan que sí.",
      ":8ball:| Mejor no decirlo ahora.",
      ":8ball:| No cuentes con eso.",
      ":8ball:| Mis investigaciones dicen que no.",
      ":8ball:| Mala perspectiva.", ]
    
        const ball = Math.round((Math.random() * choice.length))
        const embed = new EmbedBuilder()
        .setTitle(`Question : ${question}?`)
        .setColor("Blue")
        .setDescription(`**Respuesta :** ${choice[ball]}`)
        .setTimestamp()
        .setFooter({ text: "8ball"})
        .setThumbnail("https://magic-8ball.com/wp-content/uploads/ball.webp")
            await interaction.reply ({  embeds: [embed] }).catch(err =>{

            })
  },
}