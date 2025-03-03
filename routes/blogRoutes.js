//import express : Express is used to create routes and handle HTTP requests.
const express = require('express');
//import blogController : blogController is used to handle the logic of the routes.
const blogController = require('../controllers/blogController');
//creates a router object
const router = express.Router();

router.get('/create', blogController.blog_create_get);
router.get('/', blogController.blog_index);
router.post('/', blogController.blog_create_post);
router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.blog_delete);

module.exports = router;