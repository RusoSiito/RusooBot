const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("autoroles")
    .setDescription("Te respondere Pong!!"),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  execute(interaction) {
    const button = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId(`azul`)
        .setLabel(`Azul`)
        .setStyle(ButtonStyle.Primary),

      new ButtonBuilder()
        .setCustomId(`amarillo`)
        .setLabel(`Amarillo`)
        .setStyle(ButtonStyle.Danger)
    );

    const embed = new EmbedBuilder().setTitle(
      `Seleciona el color que quieras.`
    );

    interaction.reply({ embeds: [embed], components: [button] });
  },
};
