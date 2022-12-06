const Router = require('express').Router()

const ReviewRouter = require('./ReviewRouter')
const InstrumentRouter = require('./InstrumentRouter')
const CommentRouter = require('./CommentRouter')


Router.use('/reviews', ReviewRouter)
Router.use('/instruments', InstrumentRouter)
Router.use('/commentss', CommentRouter)




module.exports = Router