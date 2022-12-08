const Router = require("express").Router();

const ReviewRouter = require("./ReviewRouter");
const InstrumentRouter = require("./InstrumentRouter");
const CommentRouter = require("./CommentRouter");
const CartRouter = require("./CartRouter");
const AuthRouter = require("./AuthRouter");
const PostRouter = require("./PostRouter");

Router.use("/reviews", ReviewRouter);
Router.use("/instruments", InstrumentRouter);
Router.use("/comments", CommentRouter);
Router.use("/carts", CartRouter);

Router.use("/auth", AuthRouter);
Router.use("/posts", PostRouter);

module.exports = Router;
