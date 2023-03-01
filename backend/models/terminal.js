"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Terminal extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.User);
            this.hasMany(models.Toleg);
            this.hasMany(models.Hasap);
        }
    }
    Terminal.init(
        {
            terminal_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            name: DataTypes.STRING,
            address: DataTypes.TEXT,
            money: DataTypes.INTEGER,
            active: DataTypes.BOOLEAN,
            deleted: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: "Terminal",
        }
    );
    return Terminal;
};
