const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

// routes
const authRoutes = require('./routes/auth')
// const iconRoutes = require('./routes/icon')

// environment variable
require('dotenv').config()

// mongodb connection

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(
        process.env.MONGO_URI
    ).then(() => {
        console.log('Database connected')
    })
}
// mongoose.connect(
//     `mongodb://${process.env.MONGO_DB_URL}/${process.env.MONGO_DB_DATABASE}`,
// ).then(() => {
//     console.log('Database connected')
// }, err => console.log(err))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', authRoutes)
// app.use('/api', iconRoutes)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server at started at ${port} port`)
})
