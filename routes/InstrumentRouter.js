const Router = require('express').Router()
const controller = require('../controllers/InstrumentController')


Router.get('/view', controller.getAllInstruments)
// Router.get('/view/:review_id', controller.GetInstrumentDetails)
// Router.post('/:user_id', controller.AddInstrument)
// Router.put('/:review_id', controller.UpdateInstrument)
// Router.delete('/:review_id', controller.DeleteInstrument)

module.exports = Router