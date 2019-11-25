const matakuliah = require('express')()
const matakuliahController = require('../controller/matakuliah')

matakuliah.post('/insert',(req , res) => {
    matakuliahController.insertaMatakuliah(req.body)
    .then(result => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = matakuliah