const express = require("express");
const Store = require("../controllers/store");
const mainRouter = express.Router();
mainRouter.route("/Store").get(Store.getStore);
module.exports = mainRouter;
