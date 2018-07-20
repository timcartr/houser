require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const ctrl = require('./controller')

const { SERVER_PORT, CONNECTION_STRING } = process.env
const app=express()

app.use(bodyParser.json())


app.get('/api/all', ctrl.getAll)
app.post('/api/createhouse', ctrl.createHouse)
app.delete('/api/deletehouse/:id', ctrl.deleteHouse)


const port = SERVER_PORT
massive(CONNECTION_STRING).then( connection => {
    app.set('db', connection)
    app.listen(port, () => {
        console.log(`Magic happening on port ${port}`)
    })
})