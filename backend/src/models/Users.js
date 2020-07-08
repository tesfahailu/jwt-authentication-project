const Sequelize = require("sequelize");

modules.export = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING(30),
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING(30),
    allowNull: false,
    unique: true,
  },
});
