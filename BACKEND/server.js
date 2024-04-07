require('dotenv').config()
const workOutRoute = require('./routes/workout')

const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/', workOutRoute);

app.get('/', (req, res) => {
    res.json({mssg:'Welcome to the app'})
})


app.listen(process.env.PORT, () => {
    console.log('Listening on Port', process.env.PORT)
})