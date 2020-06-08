const express = require('express')

const app = express()

const port = '3000'

const server = app.listen(3000, () => console.log(`Server is listening at ${port}`))


app.get('/', (req, res) => {
    res.send('Hi!')
    setTimeout(() => {process.on('SIGTERM', () => {
        server.close(() => {
            console.log('Process terminated')
        })
    })}, 5000)

})

