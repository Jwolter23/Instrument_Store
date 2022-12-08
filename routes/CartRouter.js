const Router = require("express").Router();
const controller = require("../controllers/CartController");

Router.get("/view", controller.getAllCarts);
Router.get("/view/:cart_id", controller.GetCartDetails);

Router.post("/:user_id", controller.AddCart);

// Router.put('/:cart_id', controller.UpdateCart)
// Router.delete('/:cart_id', controller.DeleteCart)

module.exports = Router;
