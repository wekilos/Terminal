var Sequelize = require("sequelize");
const { Terminal, Hasap, User } = require("../../models");
const Op = Sequelize.Op;
const fs = require("fs");

const getAll = async (req, res) => {
    const { TerminalId, UserId } = req.query;
    const { name } = req.query;
    const Name =
        name &&
        (name?.length > 0
            ? {
                  [Op.or]: [
                      { inkosator: { [Op.like]: `%${name}%` } },
                      { money: { [Op.like]: `%${name}%` } },
                      { real_money: { [Op.like]: `%${name}%` } },
                  ],
              }
            : null);
    const TerminalOne = TerminalId ? { TerminalId: TerminalId } : null;
    const UserOne = UserId ? { UserId: UserId } : null;

    Hasap.findAll({
        include: [
            {
                model: Terminal,
            },
            {
                model: User,
            },
        ],

        where: {
            [Op.and]: [TerminalOne, UserOne, Name],
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
    const data = await Hasap.findOne({ where: { id: id } });
    if (data) {
        Hasap.findOne({
            include: [
                {
                    model: Terminal,
                },
                {
                    model: User,
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
        res.send("BU ID boyuncha Hasap yok!");
    }
};

const create = async (req, res) => {
    const { real_money, inkosator, UserId, TerminalId } = req.body;
    const exist = await Terminal.findOne({
        where: {
            id: TerminalId,
        },
    });

    if (!exist) {
        let text = "Bu address-de terminal onden yok!";
        res.json({
            msg: text,
        });
    } else {
        Hasap.create({
            money: exist.money,
            real_money,
            inkosator,
            UserId,
            TerminalId,
        })
            .then(async (data) => {
                await Terminal.update(
                    { money: 0 },
                    { where: { id: TerminalId } }
                );
                res.json(data);
            })
            .catch((err) => {
                console.log(err);
                res.json("create Hasap:", err);
            });
    }
};

const Destroy = async (req, res) => {
    const { id } = req.params;
    let data = await Hasap.findOne({ where: { id } });
    if (data) {
        Hasap.destroy({
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
        res.json("Bu Id Boyuncha Hasap yok!");
    }
};
exports.getAll = getAll;
exports.getOne = getOne;
exports.create = create;
exports.Destroy = Destroy;
