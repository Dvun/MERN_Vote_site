const express = require('express')
const cors = require('cors')
const fs = require('fs')
const startDB = require('./config/db.config')
const morgan = require('morgan')
require('dotenv').config()
const cookieParser = require('cookie-parser')
const app = express()


// Middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())


// Routes
const folderDir = './server/routes'
fs.readdirSync(folderDir).map((route) => app.use('/api', require(`./routes/${route}`)))


// Server Port
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  try {
    console.log(`Server running on PORT ${PORT}`)
  } catch (e) {
    console.log(e)
  }
})

startDB()