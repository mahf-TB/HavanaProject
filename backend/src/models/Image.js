module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("Image", {
      path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
       //   foreign keys #####################################
      article_id: {
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
    }
  );

    Image.associate = (models) => {
        Image.belongsTo(models.Article, { foreignKey: 'article_id' });
    };
  
    return Image;
  };