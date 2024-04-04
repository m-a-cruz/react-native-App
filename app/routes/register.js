const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../config/db.config');
const router = express.Router();

router.post('/register', async (req, res) => {
    try{
        const {name, email, username, password, role_id, status_id} = req.body;
        const hashedPassword = await bcrypt.hashSync(password, 10);

        const insertUserQuery = 'INSERT INTO users (name, email, username, password, role_id, status_id) VALUES (?, ?, ?, ?, ?, ?)';
        await db.promise().execute(insertUserQuery, [name, email, username, hashedPassword, role_id, status_id]);

        res.status(201).json({message: 'User created successfully'});
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({error: 'Internal server error'});
    }
});

module.exports = router;
