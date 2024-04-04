const express = require('express');
const db = require('../config/db.config');
const bcrypt = require('bcrypt');
const authenticateToken = require('../middleware/auth.config');
const router = express.Router();

//GET ALL STATUS
router.get('/status', authenticateToken, (req, res) => {
    try {
        db.query('SELECT * FROM status', (err, result) => {
            if (err) {
                console.error('Error fetching items:', err);
                res.status(500).json({ message: 'Internal Server Error'});
            } else {
                res.status(200).json(result);
            }
        });
    } catch(error) {
        console.error('Error loading status:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//GET ONE STATUS
router.get('/status/:id', authenticateToken, (req, res) => {
    let user_id = req.params.id;
    if (!user_id) {
        return res.status(400).send({ error: true, message: 'Please provide user_id'});
    }
    try {
        db.query('SELECT * FROM status WHERE id = ?', user_id, (err, result) => {
            if (err) {
                console.error('Error fetching items:', err);
                res.status(500).json({ message: 'Internal Server Error'});
            } else {
                res.status(200).json(result);
            }
        });
    } catch (error) {
        console.error('Error loading user:', error);
        res.status(500).json({ error: 'Internal Server Error'});
    }
});

module.exports = router;