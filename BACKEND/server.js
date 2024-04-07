require('dotenv').config()
const workOutRoute = require('./routes/workout')

const express = require('express')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts', workOutRoute);




app.listen(process.env.PORT, () => {
    console.log('Listening on Port', process.env.PORT)
})