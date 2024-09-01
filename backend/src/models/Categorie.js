module.exports = (sequelize, DataTypes) => {
    const Categorie = sequelize.define("Categorie", {
        libelle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      tableName: 'Categories' // Spécifiez explicitement le nom de la table
    });

    Categorie.associate = (models) => {
      Categorie.hasMany(models.Article, { foreignKey: 'categorie_id' , targetKey: 'id' });
    };

    return Categorie;
  };