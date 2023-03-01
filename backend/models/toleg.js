"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Toleg extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Terminal);
        }
    }
    Toleg.init(
        {
            money: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Toleg",
        }
    );
    return Toleg;
};
