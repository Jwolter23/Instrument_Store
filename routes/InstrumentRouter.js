const Router = require('express').Router()
const controller = require('../controllers/InstrumentController')


Router.get('/view', controller.getAllInstruments)
// Router.get('/view/:comment_id', controller.GetCommentDetails)
// Router.post('/:user_id', controller.AddComment)
// Router.put('/:comment_id', controller.UpdateComment)
// Router.delete('/:comment_id', controller.DeleteComment)

module.exports = Router