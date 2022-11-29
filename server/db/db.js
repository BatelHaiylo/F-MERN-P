const mongoose = require('mongoose')

mongoose
  .connect(process.env.CONNECTION_STRING,
    { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Server connected to DB port: ${process.env.PORT}`))
  .catch((error) => console.log(error.message));

module.exports = mongoose.connection;