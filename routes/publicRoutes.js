const express = require("express");
const publicRouter = express.Router();
const pageController = require("../controllers/pagesController");
const userController = require("../controllers/userController");

// Rutas del Públicas:
publicRouter.get("/", pageController.showHome);
//  publicRouter.get("/article/:slug", pageController.showArticle);

// publicRouter.get("/login", pageController.showLogin);
// publicRouter.get("/register", pageController.showRegister);

// publicRouter.post("/login", userController.login);
publicRouter.get("/register", userController.showRegister);
publicRouter.post("/register", userController.store);

module.exports = publicRouter;
