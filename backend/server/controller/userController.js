var Sequelize = require("sequelize");
const { User } = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Func = require("../functions/functions");
const Op = Sequelize.Op;
const fs = require("fs");

const getAll = async (req, res) => {
    const { role, active, username } = req.query;
    const Role = role && (role != 0 ? { role: role } : null);
    const Active = active && (active ? { active: active } : null);
    const Username =
        username &&
        (username?.length > 0
            ? {
                  [Op.or]: [
                      { username: { [Op.like]: `%${username}%` } },
                      { login: { [Op.like]: `%${username}%` } },
                  ],
              }
            : null);

    User.findAll({
        // include: [
        //     {
        //         model: EmployeeStatus,
        //     },
        //     {
        //         model: Store,
        //     },
        // ],

        where: {
            [Op.and]: [{ deleted: false }, Role, Active, Username],
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
    const data = await User.findOne({ where: { id: id } });
    if (data) {
        User.findOne({
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
        res.send("BU ID boyuncha User yok!");
    }
};

const create = async (req, res) => {
    const { username, login, password, role } = req.body;
    const exist = await User.findOne({
        where: {
            login: login,
        },
    });

    const salt = bcrypt.genSaltSync();
    bcrypt.hash(password, salt, (err, hashpassword) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ msg: "Error", err: err });
        } else {
            if (exist) {
                let text = "Bu username-de user onden bar!";
                res.json({
                    msg: text,
                });
            } else {
                User.create({
                    username,
                    login,
                    role,
                    password: hashpassword,
                    active: true,
                    deleted: false,
                })
                    .then(async (data) => {
                        jwt.sign(
                            {
                                id: data.id,
                                login: data.login,
                                username: data.username,
                                role: data.role,
                            },
                            Func.Secret(),
                            (err, token) => {
                                res.status(200).json({
                                    msg: "Suссessfully",
                                    token: token,
                                    id: data.id,
                                    login: data.login,
                                    username: data.username,
                                    role: data.role,
                                });
                            }
                        );
                    })
                    .catch((err) => {
                        console.log(err);
                        res.json("create employee:", err);
                    });
            }
        }
    });
};

const login = async (req, res) => {
    const { login, password } = req.body;

    await User.findOne({
        where: { login: login },
    })
        .then(async (data) => {
            if (!data.active) {
                res.json({ msg: "Siz DisActive edilen!" });
                return 0;
            }

            if (await bcrypt.compare(password, data.password)) {
                const token = jwt.sign(
                    {
                        id: data.id,
                        login: data.login,
                        username: data.username,
                        role: data.role,
                    },
                    Func.Secret()
                );

                return res.json({
                    msg: "Suссessfully",
                    token: token,
                    id: data.id,
                    login: data.login,
                    username: data.username,
                    role: data.role,
                    login: true,
                });
            } else {
                let text = "Siziň ulanyjy adyňyz ýa-da açar sözüňiz nädogry!";
                res.send({
                    msg: text,
                    login: false,
                });
            }
        })
        .catch((err) => {
            let text = "Hasaba alynmadyk employee!";
            res.send({ login: false, msg: text, err: err });
        });
};

const update = async (req, res) => {
    const { username, role, id } = req.body;

    const data = await User.findOne({ where: { id: id } });
    if (!data) {
        res.json("Bu Id boyuncha User yok!");
    } else {
        User.update(
            {
                username,
                role,
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
                res.json("update User:", err);
            });
    }
};

const updatePass = async (req, res) => {
    const { password, id } = req.body;

    const data = await User.findOne({ where: { id: id } });
    if (!data) {
        res.json("Bu username boyuncha User yok!");
    }
    const salt = bcrypt.genSaltSync();
    bcrypt.hash(password, salt, (err, hashpassword) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ msg: "Error", err: err });
        } else {
            User.update(
                {
                    password: hashpassword,
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
                    res.json("forgot user:", err);
                });
        }
    });
};

const disActive = async (req, res) => {
    const { id } = req.params;
    let data = await User.findOne({ where: { id } });
    if (data) {
        User.update(
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
        res.json("Bu Id Boyuncha User yok!");
    }
};

const Active = async (req, res) => {
    const { id } = req.params;
    let data = await User.findOne({ where: { id } });
    if (data) {
        User.update(
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
        res.json("Bu Id Boyuncha User yok!");
    }
};

const Delete = async (req, res) => {
    const { id } = req.params;
    let data = await User.findOne({ where: { id } });
    if (data) {
        User.update(
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
        res.json("Bu Id Boyuncha Employee yok!");
    }
};
const Destroy = async (req, res) => {
    const { id } = req.params;
    let data = await User.findOne({ where: { id } });
    if (data) {
        User.destroy({
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
        res.json("Bu Id Boyuncha User yok!");
    }
};
exports.getAll = getAll;
exports.getOne = getOne;
exports.create = create;
exports.login = login;
exports.update = update;
exports.updatePass = updatePass;
exports.disActive = disActive;
exports.Active = Active;
exports.Delete = Delete;
exports.Destroy = Destroy;
