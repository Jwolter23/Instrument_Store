const Router = require('express').Router()

const ReviewRouter = require('./ReviewRouter')
const InstrumentRouter = require('./InstrumentRouter')


Router.use('/reviews', ReviewRouter)
Router.use('/instruments', InstrumentRouter)




module.exports = Router