const router = require('express').Router();

router.post('/sell', (req, res) => {});
router.post('/bulk', (req, res) => {});
router.get('', (req, res) => {});

router.get('/u/:username', (req, res) => {});
router.get('/t/:ticketId', (req, res) => {});
// router.patch('/u/:username', (req, res) => {});
// router.patch('/t/:ticketId', (req, res) => {});
router.delete('/u/:username', (req, res) => {});
router.delete('/t/:ticketId', (req, res) => {});

router.get('/draw', (req, res) => {});

module.exports = router;
