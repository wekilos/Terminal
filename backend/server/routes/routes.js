const express = require("express");
// const { verify } = require("crypto");
const Func = require("../functions/functions");
const sequelize = require("../../config/db");
const router = express.Router();
const jwt = require("jsonwebtoken");
const cache = require("../../config/node-cache");
const path = require("path");

// Controllers
const UserControllers = require("../controller/userController");
const TerminalControllers = require("../controller/terminalController");
const TolegControllers = require("../controller/tolegController");
const HasapControllers = require("../controller/hasapController");

// // Routes

// User Routes
router.get("/user/all", cache.get, UserControllers.getAll, cache.set);
router.get("/user/:id", cache.get, UserControllers.getOne, cache.set);
router.post("/user/create", UserControllers.create);
router.post("/user/login", UserControllers.login);
router.patch("/user/update", UserControllers.update);
router.patch("/user/update-pass", UserControllers.updatePass);
router.patch("/user/disActive/:id", UserControllers.disActive);
router.patch("/user/active/:id", UserControllers.Active);
router.patch("/user/delete/:id", UserControllers.Delete);
router.delete("/user/destroy/:id", UserControllers.Destroy);

// Terminal Routes
router.get("/terminal/all", cache.get, TerminalControllers.getAll, cache.set);
router.get("/terminal/:id", cache.get, TerminalControllers.getOne, cache.set);
router.post("/terminal/create", TerminalControllers.create);
router.patch("/terminal/update", TerminalControllers.update);
router.patch("/terminal/disActive/:id", TerminalControllers.disActive);
router.patch("/terminal/active/:id", TerminalControllers.Active);
router.patch("/terminal/delete/:id", TerminalControllers.Delete);
router.delete("/terminal/destroy/:id", TerminalControllers.Destroy);

// Toleg Routes
router.get("/toleg/all", cache.get, TolegControllers.getAll, cache.set);
router.get("/toleg/:id", cache.get, TolegControllers.getOne, cache.set);
router.post("/toleg/create", TolegControllers.create);
router.delete("/toleg/destroy/:id", TolegControllers.Destroy);

// Hasap Routes
router.get("/hasap/all", cache.get, HasapControllers.getAll, cache.set);
router.get("/hasap/:id", cache.get, HasapControllers.getOne, cache.set);
router.post("/hasap/create", HasapControllers.create);
router.delete("/hasap/destroy/:id", HasapControllers.Destroy);

// For Token

function verifyToken(req, res, next) {
    const bearerHeader =
        req.headers["authorization"] || req.headers["Authorization"];
    if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];

        jwt.verify(bearerToken, Func.Secret(), (err, authData) => {
            if (err) {
                res.json("err");
                console.log(err);
            } else {
                req.id = authData.id;
            }
        });
        next();
    } else {
        res.send("<center><h2>This link was not found! :(</h2></center>");
    }
}

module.exports = router;
