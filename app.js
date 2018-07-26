const express = require('express')
const app = express()
const request = require('request')
const PORT = 5000
const URL = 'https://api.meetup.com/find/upcoming_events'


app.get('/events', (req, res) => {
    request.get({ url: URL, qs: req.query, json: true}, (err, _, body) => {
        err ? res.json(err): res.json(body)
    })
})

app.listen(PORT, () => console.log(`Example app listening on port ${ PORT }!`))