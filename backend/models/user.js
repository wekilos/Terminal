"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.hasMany(models.Hasap);
            this.hasMany(models.Terminal);
        }
    }
    User.init(
        {
            username: DataTypes.STRING,
            login: DataTypes.TEXT,
            password: DataTypes.STRING,
            role: DataTypes.INTEGER,
            active: DataTypes.BOOLEAN,
            deleted: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: "User",
        }
    );
    return User;
};
