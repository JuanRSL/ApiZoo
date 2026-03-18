const express = require('express')
const app = express()
const port = 3000

app.get('/prueba', (req, res) => {
    res.send('ZZZ ez ')

})

app.listen(port,()=>{
console.log('La app se ejecuta por el puerto' + port)

})