const express = require('express')
const app = express()
const path = require('path')
const request = require('request')
const PORT = process.env.PORT || 3000

app.get('/events', (req, res) => {
    res.send('Hello World!')
} 

app.listen(5000, () => {console.log(`Example app listening on port 5000!`)})