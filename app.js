const express = require('express');
const app = express();
const request = require('request');
const cors = require('cors');

const PORT = 5000;

const URLAPI = 'https://api.meetup.com';
const KEY = '4761040396c177f94118782631657';

app.use(cors());

const setRoute = (route, endPoint) => {
    app.get(route, (req, res) => {
        req.query.key = KEY;

        request.get({ url: endPoint, qs: req.query, json: true}, (err, _, body) => {
            err ? res.json(err): res.json(body)
        })
    })
}

setRoute('/events', '/find/upcoming_events');
setRoute('/events/categories', '/find/topic_categories');

app.listen(PORT, () => console.log(`Example app listening on port ${ PORT }!`))
