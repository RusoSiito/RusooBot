const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    Client,
    EmbedBuilder
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("hola")
      .setDescription("👋 | Te respondere con un Hola!"),
      
  async execute(interaction, client) {
  
      const embed = new EmbedBuilder()
      .setTitle(`Holaa ${interaction.user.username}`)
      .setColor(`#2b2d31`)
      .setTimestamp()
  
      interaction.reply({ embeds: [embed] })
  
    },
  };