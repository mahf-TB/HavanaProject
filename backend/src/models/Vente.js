module.exports = (sequelize, DataTypes) => {
    const Vente = sequelize.define("Vente", {
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
      client_id: {
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
  
    Vente.associate = (models) => {
        Vente.belongsTo(models.Facture, { foreignKey: "facture_id" });
        Vente.belongsTo(models.Client, { foreignKey: "client_id" });
        Vente.belongsTo(models.User, { foreignKey: "id_user" });
  
        Vente.hasMany(models.Ligne_vente, { foreignKey: "commande_id" });
    };
  
    return Vente;
  };
  