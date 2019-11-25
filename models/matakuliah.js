const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MatakuliahSchema = new Schema({
    NamaMataKuliah: {
        type: String
    },
    KodeMatakuliah: {
        type: String
    },
    DosenMataKuliah: {
        type: String
    }
})

module.exports = mongoose.model('matakuliah', MatakuliahSchema)