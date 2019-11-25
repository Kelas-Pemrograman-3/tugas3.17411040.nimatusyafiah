const matakuliahmodel = require('../models/matakuliah')

exports.insertaMatakuliah = (data) => 
    new Promise((resolve, reject) => {
        matakuliahmodel.create(data)
            .then(res => {
                resolve({
                   error: false,
                   pesan: 'berhasil input data' 
                })
            }).catch(() => {
            reject({
                error: true,
                pesan: 'gagal input data'
            })
        })
    })