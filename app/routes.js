const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Get
router.get('/start', (req, res) => {
   
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "start";
    })[0];
    res.render('start', {
        appJourney
    });
})

router.get('/name', (req, res) => {
   
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "name";
    })[0];
    res.render('name', {
        appJourney
    });
})

router.get('/age', (req, res) => {
   
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "age";
    })[0];
    res.render('age', {
        appJourney
    });
})

router.get('/email', (req, res) => {
   
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "email";
    })[0];
    res.render('email', {
        appJourney
    });
})

router.get('/complete', (req, res) => {
   
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "complete";
    })[0];
    res.render('complete', {
        appJourney
    });
})

router.get('/tooyoung', (req, res) => {
   
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "tooyoung";
    })[0];
    res.render('tooyoung', {
        appJourney
    });
})

// Post

router.post('/start', (req, res) => {
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "start";
    })[0];

    res.redirect('/' + appJourney.next);
})

router.post('/name', (req, res) => {
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "name";
    })[0];

    res.redirect('/' + appJourney.next);
})

router.post('/age', (req, res) => {
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "age";
    })[0];
    if (req.session.data['over-18'] === 'no') {
        res.redirect('/' + appJourney.conditions[0].no);
    } else {
        res.redirect('/' + appJourney.conditions[0].yes);
    }
})

router.post('/email', (req, res) => {
    var appJourneyData = require('./data/app-journey-config.json')
    var appJourney = appJourneyData.pages.filter(function (value) {
        return value.page === "email";
    })[0];

    res.redirect('/' + appJourney.next);
})

module.exports = router
