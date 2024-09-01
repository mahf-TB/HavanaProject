module.exports = (sequelize, DataTypes) => {
    const Ligne_commande = sequelize.define("Ligne_commande", {
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
      commande_id: {
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
  
    Ligne_commande.associate = (models) => {
  
        Ligne_commande.belongsTo(models.Article, { foreignKey: 'article_id' });
        Ligne_commande.belongsTo(models.Commande, { foreignKey: 'commande_id' });
  
    };
  
    return Ligne_commande;
  };