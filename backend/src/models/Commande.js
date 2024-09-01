module.exports = (sequelize, DataTypes) => {
  const Commande = sequelize.define("Commande", {
    date_commande: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    statut: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    montant_total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    //   foreign keys #####################################
    fournisseur_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    //   foreign keys #####################################
    facture_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },     
    
    //   foreign keys #####################################
    id_user: {
      type: DataTypes.INTEGER,
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

  Commande.associate = (models) => {
    Commande.belongsTo(models.Facture, { foreignKey: "facture_id" });
    Commande.belongsTo(models.Fournisseur, { foreignKey: "fournisseur_id" });
    Commande.belongsTo(models.User, { foreignKey: "id_user" });

    Commande.hasMany(models.Ligne_commande, { foreignKey: "commande_id" });
  };

  return Commande;
};
