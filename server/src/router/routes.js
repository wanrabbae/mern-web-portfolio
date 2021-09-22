const express = require('express');
const router = express.Router();

// about
router.route('/about')
    .get((req, res) => {
        res.send('about (Server)')
    })
    .post((req, res) => {
        res.send('about post (Server)')
    })
    .patch((req, res) => {
        res.send('about patch (Server)')
    })
    .delete((req, res) => {
        res.send('about delete (Server)')
    })

// education
router.route('/education')
    .get((req, res) => {
        res.send('education (Server)')
    })
    .post((req, res) => {
        res.send('education post (Server)')
    })
    .patch((req, res) => {
        res.send('education patch (Server)')
    })
    .delete((req, res) => {
        res.send('education delete (Server)')
    })

// experience
router.route('/experience')
    .get((req, res) => {
        res.send('experience (Server)')
    })
    .post((req, res) => {
        res.send('experience post (Server)')
    })
    .patch((req, res) => {
        res.send('experience patch (Server)')
    })
    .delete((req, res) => {
        res.send('experience delete (Server)')
    })

// skills
router.route('/skills')
    .get((req, res) => {
        res.send('skills (Server)')
    })
    .post((req, res) => {
        res.send('skills post (Server)')
    })
    .patch((req, res) => {
        res.send('skills patch (Server)')
    })
    .delete((req, res) => {
        res.send('skills delete (Server)')
    })

// projects
router.route('/projects')
    .get((req, res) => {
        res.send('projects (Server)')
    })
    .post((req, res) => {
        res.send('projects post (Server)')
    })
    .patch((req, res) => {
        res.send('projects patch (Server)')
    })
    .delete((req, res) => {
        res.send('projects delete (Server)')
    })

// contact
router.route('/contact')
    .get((req, res) => {
        res.send('contact (Server)')
    })
    .post((req, res) => {
        res.send('contact post (Server)')
    })
    .patch((req, res) => {
        res.send('contact patch (Server)')
    })
    .delete((req, res) => {
        res.send('contact delete (Server)')
    })

module.exports = router;