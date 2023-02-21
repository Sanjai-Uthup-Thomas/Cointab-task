module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        Name: {
            type: DataTypes.STRING,
          },
          Gender: {
            type: DataTypes.STRING,
          },
          Email: {
            type: DataTypes.STRING,
          },
          Phone: {
            type: DataTypes.STRING,
          },
          Picture: {
            type: DataTypes.STRING,
          },
    });
    return User;
  };