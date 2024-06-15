module.exports = (sequelize, DataTypes) => {
    const Unite = sequelize.define("Unite", {
      unite_mesure: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      libelle: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      statut: {
        type: DataTypes.BOOLEAN,
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
    
    return Unite;
  };