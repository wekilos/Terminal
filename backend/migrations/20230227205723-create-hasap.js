"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Hasaps", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            money: {
                type: Sequelize.INTEGER,
            },
            real_money: {
                type: Sequelize.INTEGER,
            },
            inkosator: {
                type: Sequelize.STRING,
            },
            UserId: {
                type: Sequelize.INTEGER,
            },
            TerminalId: {
                type: Sequelize.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Hasaps");
    },
};
