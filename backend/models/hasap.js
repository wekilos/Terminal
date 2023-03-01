"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Hasap extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.User);
            this.belongsTo(models.Terminal);
        }
    }
    Hasap.init(
        {
            money: DataTypes.INTEGER,
            real_money: DataTypes.INTEGER,
            inkosator: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Hasap",
        }
    );
    return Hasap;
};
