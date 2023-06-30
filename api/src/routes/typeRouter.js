const { Router } = require("express");
const { getAllTypeHandler } = require("../handlers/getAllTypeHandler");

const typeRouter = Router();

typeRouter.get("/", getAllTypeHandler);

module.exports = typeRouter;
