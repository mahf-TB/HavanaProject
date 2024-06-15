module.exports = (sequelize, DataTypes) => {
  const Fournisseur = sequelize.define("Fournisseur", {
    noms_fournisseur: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adresse: {
      type: DataTypes.STRING, 
      allowNull: true,
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
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
  });

  Fournisseur.associate = (models) => {
    Fournisseur.hasMany(models.Article, { foreignKey: 'fournisseur_id' , targetKey: 'id'});
  };

  return Fournisseur;
};
