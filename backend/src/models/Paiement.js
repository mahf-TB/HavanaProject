module.exports = (sequelize, DataTypes) => {
  const Paiement = sequelize.define("Paiement", {
    montant: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    mode_payer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date_paiement: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    //   foreign keys #####################################
    facture_id: {
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

  Paiement.associate = (models) => {
    Paiement.belongsTo(models.Facture, { foreignKey: "facture_id" });
  };
  
  return Paiement;
};
