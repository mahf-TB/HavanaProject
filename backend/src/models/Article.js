module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define("Article", {
    reference: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nom_article: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
       //   foreign keys #####################################
    categorie_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
       //   foreign keys #####################################
    fournisseur_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
 
  Article.associate = (models) => {
    Article.belongsTo(models.Fournisseur, { foreignKey: 'fournisseur_id' });
    Article.belongsTo(models.Categorie, { foreignKey: 'categorie_id' });

    Article.hasMany(models.Image, { foreignKey: 'article_id' });
    Article.hasMany(models.Ligne_commande, { foreignKey: 'article_id' });
  };

  return Article;
};
