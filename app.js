const express = require('express')
const app = express()
const path = require('path')
const request = require('request')
const PORT = process.env.PORT || 3000



app.get('/', (req, res) => {
    //res.send('Hello World!'))
    const URL = 'https://api.meetup.com/find/upcoming_events'

    request.get({ url: URL, qs: req.query, json: true}, (err, _, body) => {
        err ? res.json(err): res.json(body)
    })
}) 


app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => console.log(`Example app listening on port ${ PORT }!`))