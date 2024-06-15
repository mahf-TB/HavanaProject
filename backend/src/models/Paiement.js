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
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      }, 
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
    
    return Paiement;
  };