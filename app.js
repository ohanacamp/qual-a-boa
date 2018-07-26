const express = require('express');
const app = express();
const request = require('request');
const cors = require('cors');

const PORT = 5000;
const URLEVENTS = 'https://api.meetup.com/find/upcoming_events';
const EVENTSENDPOINT = '/events';
const CATEGORIESENDPOINT = '/events/categories';
const URLCATEGORIES = 'https://api.meetup.com/find/topic_categories';
const KEY = '4761040396c177f94118782631657';

app.use(cors());

const retrieveData = (KEY, URL, endPoint) => {
    app.get(endPoint, (req, res) => {
        req.query.key = KEY;

        request.get({ url: URL, qs: req.query, json: true}, (err, _, body) => {
            err ? res.json(err): res.json(body)
        })
    })
}

retrieveData(KEY, URLEVENTS, EVENTSENDPOINT);
retrieveData(KEY, URLCATEGORIES, CATEGORIESENDPOINT);


/* 

app.get('/events', (req, res) => {
    req.query.key = KEY;

    request.get({ url: URLEVENTS, qs: req.query, json: true}, (err, _, body) => {
        err ? res.json(err): res.json(body)
    })
})

app.get('/events/categories', (req, res) => {
    req.query.key = KEY;
    
    request.get({ url: URLCATEGORIES, qs: req.query, json: true}, (err, _, body) => {
        err ? res.json(err): res.json(body)
    })
}) */

app.listen(PORT, () => console.log(`Example app listening on port ${ PORT }!`))
