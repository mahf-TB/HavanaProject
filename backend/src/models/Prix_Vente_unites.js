module.exports = (sequelize, DataTypes) => {
    const Prix_Vente_unites = sequelize.define("Prix_Vente_unites", {
      prix_vente: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
       //   foreign keys #####################################
      article_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
       //   foreign keys #####################################
      unite_id: {
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
  
    Prix_Vente_unites.associate = (models) => {
  
        Prix_Vente_unites.belongsTo(models.Article, { foreignKey: 'article_id' });
        Prix_Vente_unites.belongsTo(models.Unite, { foreignKey: 'unite_id' });
  
        // Article.hasMany(models.Image, { foreignKey: 'article_id' });
  
    };
  
    return Prix_Vente_unites;
  };