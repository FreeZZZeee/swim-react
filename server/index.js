import express from 'express'
import store from '../client/src/reducers/store.js'

const app = express()

app.get('/api', (req, res) => {
    res.send(store)
})

app.get('/', (req, res) => {
    res.send('Server is ready')
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server at started at ${port} port`)
})
