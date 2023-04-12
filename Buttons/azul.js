module.exports = {
  data: {
    name: `azul`,
  },
  async execute(interaction, client) {
    const azul = interaction.guild.roles.cache.get(`1094726448062922763`);
    const amarillo = interaction.guild.roles.cache.get(`1094726385345499219`);

    const hasrole = interaction.member.roles.cache.has(azul.id);

    if (hasrole)
      return interaction.member.roles.remove(azul).then((member) =>
        interaction.reply({
          content: `El rol ${azul} se te ha removido`,
          ephemeral: true,
        })
      );

    return interaction.member.roles.add(azul).then((member) =>
      interaction.reply({
        content: `El rol ${azul} se te ha agregado`,
        ephemeral: true,
      }),

      await interaction.member.roles.remove(amarillo)
    );
  },
};