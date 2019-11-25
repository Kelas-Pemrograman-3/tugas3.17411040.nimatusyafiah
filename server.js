const server = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const port = 5000


const mongoURI = 'mongodb://localhost:27017/dblatihan'

mongoose.connect(mongoURI,  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connect to db succes')
}).catch(err => {
    console.log('Error : ' + err)
})
server.use(cors())
server.use(bodyParser.json({
    extended: true,
    limit: '50mb'
}))
    server.use(bodyParser.urlencoded({
        extended: true,
        limit: '50mb'
    }))

// list router
server.use('/mahasiswa', require('./routes/mahasiswa'))
server.use('/matakuliah', require('./routes/matakuliah'))
server.listen(port,function() {
   console.log('server started on port' + port)
})