module.exports = (sequelize, DataTypes) => {
    const Ligne_Vente = sequelize.define("Ligne_vente", {
      qte: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      prix_remise: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
       //   foreign keys #####################################
      article_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
       //   foreign keys #####################################
      vente_id: {
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
  
    Ligne_Vente.associate = (models) => {
  
      Ligne_Vente.belongsTo(models.Article, { foreignKey: 'article_id' });
      Ligne_Vente.belongsTo(models.Vente, { foreignKey: 'commande_id' });
  
    };
  
    return Ligne_Vente;
  };