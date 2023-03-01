var Sequelize = require("sequelize");
const { User, Terminal, Toleg, Hasap } = require("../../models");
const Op = Sequelize.Op;
const fs = require("fs");

const getAll = async (req, res) => {
    const { name } = req.query;
    const Name =
        name &&
        (name?.length > 0
            ? {
                  [Op.or]: [
                      { name: { [Op.like]: `%${name}%` } },
                      { address: { [Op.like]: `%${name}%` } },
                  ],
              }
            : null);

    Terminal.findAll({
        include: [
            {
                model: User,
            },
            {
                model: Toleg,
            },
            {
                model: Hasap,
            },
        ],

        where: {
            [Op.and]: [Name, { deleted: false }],
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
    const data = await Terminal.findOne({ where: { id: id } });
    if (data) {
        Terminal.findOne({
            include: [
                {
                    model: User,
                },
                {
                    model: Toleg,
                },
                {
                    model: Hasap,
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
        res.send("BU ID boyuncha Terminal yok!");
    }
};

const create = async (req, res) => {
    const { name, address, UserId } = req.body;
    const exist = await Terminal.findOne({
        where: {
            address: address,
        },
    });

    if (exist) {
        let text = "Bu address-de terminal onden bar!";
        res.json({
            msg: text,
        });
    } else {
        Terminal.create({
            name,
            address,
            money: 0,
            UserId: UserId,
            active: true,
            deleted: false,
        })
            .then(async (data) => {
                res.json(data);
            })
            .catch((err) => {
                console.log(err);
                res.json("create terminal:", err);
            });
    }
};

const update = async (req, res) => {
    const { name, address, id } = req.body;

    const data = await Terminal.findOne({ where: { id: id } });
    if (!data) {
        res.json("Bu Id boyuncha Terminal yok!");
    } else {
        Terminal.update(
            {
                name,
                address,
                active: true,
                deleted: false,
            },
            {
                where: {
                    id: id,
                },
            }
        )
            .then(async (data) => {
                res.json("updated");
            })
            .catch((err) => {
                console.log(err);
                res.json("update Terminal:", err);
            });
    }
};

const disActive = async (req, res) => {
    const { id } = req.params;
    let data = await Terminal.findOne({ where: { id } });
    if (data) {
        Terminal.update(
            {
                active: false,
            },
            {
                where: {
                    id,
                },
            }
        )
            .then(() => {
                res.json("DisActived!");
            })
            .catch((err) => {
                console.log(err);
                res.json({ err: err });
            });
    } else {
        res.json("Bu Id Boyuncha Terminal yok!");
    }
};

const Active = async (req, res) => {
    const { id } = req.params;
    let data = await Terminal.findOne({ where: { id } });
    if (data) {
        Terminal.update(
            {
                active: true,
            },
            {
                where: {
                    id,
                },
            }
        )
            .then(() => {
                res.json("Actived!");
            })
            .catch((err) => {
                console.log(err);
                res.json({ err: err });
            });
    } else {
        res.json("Bu Id Boyuncha Terminal yok!");
    }
};

const Delete = async (req, res) => {
    const { id } = req.params;
    let data = await Terminal.findOne({ where: { id } });
    if (data) {
        Terminal.update(
            {
                active: false,
                deleted: true,
            },
            {
                where: {
                    id,
                },
            }
        )
            .then(() => {
                res.json("deleted!");
            })
            .catch((err) => {
                console.log(err);
                res.json({ err: err });
            });
    } else {
        res.json("Bu Id Boyuncha Terminal yok!");
    }
};
const Destroy = async (req, res) => {
    const { id } = req.params;
    let data = await Terminal.findOne({ where: { id } });
    if (data) {
        Terminal.destroy({
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
        res.json("Bu Id Boyuncha Terminal yok!");
    }
};
exports.getAll = getAll;
exports.getOne = getOne;
exports.create = create;
exports.update = update;
exports.disActive = disActive;
exports.Active = Active;
exports.Delete = Delete;
exports.Destroy = Destroy;
