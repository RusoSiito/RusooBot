module.exports = {
  data: {
    name: `Hola`,
  },
  async execute(interaction, client) {
    await interaction.reply({ content: `Hola a todos` });
  },
};