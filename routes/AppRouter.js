const Router = require('express').Router()

const ReviewRouter = require('./ReviewRouter')
const InstrumentRouter = require('./InstrumentRouter')
const CommentRouter = require('./CommentRouter')
const CartRouter = require('./CartRouter')


Router.use('/reviews', ReviewRouter)
Router.use('/instruments', InstrumentRouter)
Router.use('/comments', CommentRouter)
Router.use('/carts', CartRouter)




module.exports = Router