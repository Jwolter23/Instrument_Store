const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const AuthRouter = require('./routes/AuthRouter')
const PostRouter = require('./routes/PostRouter')
const AppRouter = require('./routes/AppRouter')



const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//ROUTES HERE
app.use('/auth', AuthRouter)
app.use('/posts', PostRouter)

app.use('/api', AppRouter)


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))