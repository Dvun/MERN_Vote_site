const mongoose = require('mongoose')

// DataBase connect

async function startDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    console.log('Database connected!')
  } catch (e) {
    console.log(e)
    process.exit(1)
  }
}

module.exports = startDB