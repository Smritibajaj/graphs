const express = require('express');
const router = express.Router();
// Require the controllers WHICH WE DID NOT CREATE YET!!
const reports_controller = require('../controllers/reports.controller');
router.get('/test', reports_controller.test);
router.get('/allgraph', reports_controller.get_all_graphs);
router.get('/:id', reports_controller.graph_details);
router.post('/create', reports_controller.graph_create);

module.exports = router;