const express = require("express");

const routes = express.Router();

const authMiddleware = require("./app/middlewares/auth");

const controllers = require("./app/controllers");

routes.post("/users", controllers.UserController.store);
routes.post("/sessions", controllers.SessionController.store);

routes.use(authMiddleware);

routes.get("/products", controllers.ProductController.index);
routes.post("/product", controllers.ProductController.store);

module.exports = routes;
