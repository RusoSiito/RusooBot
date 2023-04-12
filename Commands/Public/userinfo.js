const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("userinfo")
    .setDescription("Te mostrare la informacion de algun usuario")
    .addUserOption((option) =>
      option
        .setName(`usuario`)
        .setDescription(`Usuario del que quieres obtener informacion.`)
    ),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction) {
    const user = interaction.options.getUser(`usuario`) || interaction.user;
    const miembro = await interaction.guild.members.fetch(user.id);
    let member = await user.fetch({ force: true });

    const embed = new EmbedBuilder()
      .setColor("Blue")
      .setAuthor({
        name: `${user.username}`,
        iconURL: `${user.displayAvatarURL({ dynamic: true })}`,
      })
      .setThumbnail(`${user.displayAvatarURL({ dynamic: true })}`)
      .setImage(user.bannerURL({ size: 512 }))
      .setTitle(`Esta es la informacino de ${user.username}`)
      .addFields(
        { name: `Info General`, value: `**ID** ${user.id}` },
        {
          name: `Cuenta Creada`,
          value: `<t:${parseInt(user.createdTimestamp / 1000)}:R>`,
          inline: true,
        },
        {
          name: `Se unió al Servidor`,
          value: `<t:${parseInt(miembro.joinedAt / 1000)}:R>`,
          inline: true,
        },
        {
          name: `Banner del Usuario`,
          value: user.bannerURL() ? "** **" : "Este usuario no tiene un banner",
        }
      );

    await interaction.reply({ embeds: [embed] });
  },
};
