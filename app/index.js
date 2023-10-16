const mongoose = require('mongoose')

console.log('Arrancant...')

// Connect to MongoDB
mongoose
  .connect(
    'mongodb://root:example@mongodb:27017/docker-node-mongo?authSource=admin',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected!!'))
  .catch(err => console.log(err))
