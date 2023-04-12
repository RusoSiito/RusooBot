module.exports = {
  data: {
    name: `amarillo`,
  },
  async execute(interaction, client) {
    const amarillo = interaction.guild.roles.cache.get(`1094726385345499219`);
    const azul = interaction.guild.roles.cache.get(`1094726448062922763`);

    const hasrole = interaction.member.roles.cache.has(amarillo.id);

    if (hasrole)
      return interaction.member.roles.remove(amarillo).then((member) =>
        interaction.reply({
          content: `El rol ${amarillo} se te ha removido`,
          ephemeral: true,
        })
      );

    return interaction.member.roles.add(amarillo).then((member) =>
      interaction.reply({
        content: `El rol ${amarillo} se te ha agregado`,
        ephemeral: true,
      }),

      await interaction.member.roles.remove(azul)
      
    );
  },
};