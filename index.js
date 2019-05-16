let express = require('express')
let app = express()
let mongoose = require('mongoose')
let currents = require('./src/controllers/ctrl-currents')
let parkings = require('./src/controllers/ctrl-parkings')
let tarifaparqueos = require('./src/controllers/ctrl-tarifaparqueos')
let users = require('./src/controllers/ctrl-users')
let bodyParser = require('body-parser')

mongoose.connect('mongodb+srv://StanLee:' + process.env.MONGO_ATLAS_PW + '@theoneaboveall-rp7bm.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })
app.use(bodyParser.json())
app.set('view engine', 'ejs');

app.use('/currents', currents)
app.use('/parkings', parkings)
app.use('/tarifas', tarifaparqueos)
app.use('/users', users)


const PORT = process.env.PORT || 3000

app.listen(PORT, '127.0.0.1', () => {
  console.info('Server gas started on ${PORT}')
})

module.exports = app