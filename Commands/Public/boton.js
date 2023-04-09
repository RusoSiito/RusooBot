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
    .setName("boton")
    .setDescription("Te respondere Pong!!"),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction) {
    const button = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId(`test`)
        .setLabel(`Menú`)
        .setStyle(ButtonStyle.Success),

      new ButtonBuilder()
        .setCustomId(`test2`)
        .setLabel(`Pagina`)
        .setStyle(ButtonStyle.Danger),

      new ButtonBuilder()
        .setCustomId(`test3`)
        .setLabel(`Pagina 2`)
        .setStyle(ButtonStyle.Primary)
    );

    const embed = new EmbedBuilder()
      .setTitle(`Menú`)
      .setDescription(
        `Pagina 1 comandos de Utilidad, Pagina 2 comandos de Moderacion`
      );

    const embed2 = new EmbedBuilder()
      .setTitle(`Comandos de Utilidad`)
      .addFields({
        name: `/User`,
        value: `Te mostraré informacion sobre un usuario`,
      });

    const embed3 = new EmbedBuilder()
      .setTitle(`Comandos de Moderacion`)
      .setDescription(`/Ban, banearé a algun usuario`);

    await interaction.reply({ embeds: [embed], components: [button] });

    const collector = interaction.channel.createMessageComponentCollector();

    collector.on(`collect`, async (i) => {
      if (i.customId === `test`) {
        if (i.user.id !== interaction.user.id) {
          return await i.reply({
            content: `Solo la persona que ejecuto el comando puede utilizar los botones.`,
            ephemeral: true,
          });
        }
        await i.update({ embeds: [embed], components: [button] });
      }

      if (i.customId === `test2`) {
        if (i.user.id !== interaction.user.id) {
          return await i.reply({
            content: `Solo la persona que ejecuto el comando puede utilizar los botones.`,
            ephemeral: true,
          });
        }
        await i.update({ embeds: [embed2], components: [button] });
      }

      if (i.customId === `test3`) {
        if (i.user.id !== interaction.user.id) {
          return await i.reply({
            content: `Solo la persona que ejecuto el comando puede utilizar los botones.`,
            ephemeral: true,
          });
        }
        await i.update({ embeds: [embed3], components: [button] });
      }
    });
  },
};
