const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("testing")
    .setDescription("Te respondere Pong!!"),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  execute(interaction) {
    const button = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId(`Hola`)
        .setLabel(`gaerbhiou`)
        .setStyle(ButtonStyle.Success)
    );

    interaction.reply({ components: [button] });
  },
};
