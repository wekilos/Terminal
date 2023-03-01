var Sequelize = require("sequelize");
const { Terminal, Toleg } = require("../../models");
const Op = Sequelize.Op;
const fs = require("fs");

const getAll = async (req, res) => {
    const { TerminalId } = req.query;
    const TerminalOne = TerminalId ? { TerminalId: TerminalId } : null;
    Toleg.findAll({
        include: [
            {
                model: Terminal,
            },
        ],

        where: {
            [Op.and]: [TerminalOne],
        },
        order: [["id", "DESC"]],
    })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
            res.json({ error: err });
        });
};

const getOne = async (req, res) => {
    const { id } = req.params;
    const data = await Toleg.findOne({ where: { id: id } });
    if (data) {
        Toleg.findOne({
            include: [
                {
                    model: Terminal,
                },
            ],

            where: {
                id: id,
            },
        })
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                console.log(err);
                res.json({ error: err });
            });
    } else {
        res.send("BU ID boyuncha Toleg yok!");
    }
};

const create = async (req, res) => {
    const { money, terminal_id } = req.body;
    const exist = await Terminal.findOne({
        where: {
            terminal_id: terminal_id,
        },
    });

    if (!exist) {
        let text = "Bu address-de terminal onden yok!";
        res.json({
            msg: text,
        });
    } else {
        Toleg.create({
            money,
            TerminalId: exist.id,
        })
            .then(async (data) => {
                await Terminal.update(
                    { money: exist.money + money },
                    { where: { terminal_id: terminal_id } }
                );
                res.json(data);
            })
            .catch((err) => {
                console.log(err);
                res.json("create Toleg:", err);
            });
    }
};

const Destroy = async (req, res) => {
    const { id } = req.params;
    let data = await Toleg.findOne({ where: { id } });
    if (data) {
        Toleg.destroy({
            where: {
                id,
            },
        })
            .then(() => {
                res.json("destoyed!");
            })
            .catch((err) => {
                console.log(err);
                res.json({ err: err });
            });
    } else {
        res.json("Bu Id Boyuncha Toleg yok!");
    }
};
exports.getAll = getAll;
exports.getOne = getOne;
exports.create = create;
exports.Destroy = Destroy;
