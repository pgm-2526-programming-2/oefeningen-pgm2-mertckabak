/**
 * @module API endpoints
 */

const { Router } = require('express');
const { getLocations, addLocation } = require('../controllers/locations.controllers');
const router = Router();


/**
 * routes
 * GET -> returns all locations
 * POST -> Validates and saves a new location
 * @type {Router}
 */
router.get('/locations', getLocations);
router.post('/locations', addLocation);

module.exports = router;