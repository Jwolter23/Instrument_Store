const Router = require("express").Router();
const controller = require("../controllers/CommentController");

Router.get("/view", controller.getAllComments);
// Router.get('/view/:user_id', controller.GetCommentDetails)

// Router.post('/:user_id', controller.AddComment)

// Router.put('/:review_id', controller.UpdateComment)
// Router.delete('/:review_id', controller.DeleteComment)

module.exports = Router;