const server = require('express')()
const port = 5000

server.get('/user/register', (Req,Res) => {
    Res.send('<h1>Halaman Registrasi</h1>')
})

server.listen(port,function() {
   console.log('server started on port' + port)
})

