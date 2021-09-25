const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({
    dest: 'uploads/',
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB
    }
});

// middleware
const {
    auth
} = require('../middlewares/auth');

const userController = require('../controllers/userController');
const aboutController = require('../controllers/aboutController');
const educationController = require('../controllers/educationController');


// auth / user ctrl / sign in
router.get('/admins', userController.getAll);
router.post('/signin', userController.signin);

// about
router.route('/about')
    .get(aboutController.getAboutContent)
    .post(auth, upload.single('profile'), aboutController.postAboutContent)

router.put('/about/:id', auth, upload.single('profile'), aboutController.updateAboutContent)
router.delete('/about/:id', auth, aboutController.deleteAboutContent)



// education
router.route('/education')
    .get(educationController.getEducationContent)
    .post(auth, educationController.postEducationContent)

router.put('/education/:id', auth, educationController.updateEducationContent)
router.delete('/education/:id', auth, educationController.deleteEducationContent)



// experience
router.route('/experience')
    .get((req, res) => {
        res.send('experience (Server)')
    })
    .post((req, res) => {
        res.send('experience post (Server)')
    })
    .put((req, res) => {
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
    .put((req, res) => {
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
    .put((req, res) => {
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
    .put((req, res) => {
        res.send('contact patch (Server)')
    })
    .delete((req, res) => {
        res.send('contact delete (Server)')
    })

module.exports = router;