module.exports = (sequelize, DataTypes) => {
    const Facture = sequelize.define("Facture", {
      date_facture: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      statut: {
        type: DataTypes.STRING,
        allowNull: false,
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
  
    Facture.associate = (models) => {
  
        Facture.belongsTo(models.Facture, { foreignKey: 'id_user' });
  
    };
  
    return Facture;
  };