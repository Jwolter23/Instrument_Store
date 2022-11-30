const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
//app.use(logger('dev))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//ROUTES HERE


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))