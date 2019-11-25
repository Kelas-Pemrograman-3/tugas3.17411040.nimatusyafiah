const mahasiswamodel = require('../models/mahasiswa')

exports.insertaMahasiswa = (data) => 
    new Promise((resolve, reject) => {
        mahasiswamodel.create(data)
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