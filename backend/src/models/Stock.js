
module.exports = (sequelize, DataTypes) => {
    const Stock = sequelize.define("Stock", {
      prix_achat: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    //   foreign keys #####################################
      article_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      qte_stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      seuil: {
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
  
    Stock.associate = (models) => {
  
        Stock.belongsTo(models.Article, { foreignKey: 'article_id' });

    };
  
    return Stock;
  };