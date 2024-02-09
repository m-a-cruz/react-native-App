const express = require('express');
const db = require('../config/db.config');
const bcrypt = require('bcrypt');
const authenticateToken = require('../middleware/auth.config');
const router = express.Router();

//CREATE ROLE
router.post('/category', authenticateToken, async (req, res) => {
    const {category_code, category_description} = req.body;
    if(!category_code || !category_description) {
        return res.status(400).send({ error: true, message: 'Please provide proper category_code and category_description'});
    }
    try{
        db.query('INSERT INTO categories (category_code, category_description) VALUES (?, ?)', [category_code, category_description], (err, result, fields) => {
            if (err) {
                console.error('Error creating item:', err);
                res.status(500).json({ message: 'Internal Server Error'});
            }else {
                res.status(200).json(result);
            }
        })
    }catch (error) {
        console.error('Error creating role:', error);
        res.status(500).json({ error: 'Internal Server Error'});
    }
});

//GET ONE ROLE
router.get('/category/:id', authenticateToken, (req, res) => {
    let category_id = req.params.id;
    if (!category_id) {
        return res.status(400).send({ error: true, message: 'Please provide category_id'});
    }
    try {
        db.query('SELECT * FROM categories WHERE id = ?', category_id, (err, result) => {
            if (err) {
                console.error('Error fetching items:', err);
                res.status(500).json({ message: 'Internal Server Error'});
            } else {
                res.status(200).json(result);
            }
        })
    }catch (error) {
        console.error('Error loading role:', error);
        res.status(500).json({ error: 'Internal Server Error'});
    }
});

//GET ALL ROLES
router.get('/categories', authenticateToken, (req, res) => {
    try {
        db.query('SELECT * FROM categories', (err, result) => {
            if (err) {
                console.error('Error fetching items:', err);
                res.status(500).json({ message: 'Internal Server Error'});
            } else {
                res.status(200).json(result);
            }
        });
    } catch(error) {
        console.error('Error loading users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//UPDATE ROLE
router.put('/category/:id', authenticateToken, async (req, res) => {
    let category_id = req.params.id;
    const {category_code, category_description} = req.body;
    if(!category_id || !category_code || !category_description) {
        return res.status(400).send({ error: user, message: 'Please provide proper category_code and category_description'});
    }
    try{
        db.query('UPDATE categories SET category_code = ?, category_description = ? WHERE id = ?', [category_code, category_description, category_id], (err, result, fields) => {
            if (err) {
                console.error('Error updating item:', err);
                res.status(500).json({ message: 'Internal Server Error'});
            }else {
                res.status(200).json(result);
            }
        })
    }catch (error) {
        console.error('Error loading role:', error);
        res.status(500).json({ error: 'Internal Server Error'});
    }
});

//DELETE ROLE
router.delete('/category/:id', authenticateToken, (req, res) => {
    let category_id = req.params.id;
    if (!category_id) {
        return res.status(400).send({ error: true, message: 'Please provide correct category_id'});
    }
    try {
        db.query('DELETE FROM categories WHERE id = ?', category_id, (err, result, fields) => {
            if(err) {
                console.error('Error deleteing item:', err);
                res.status(500).json({ message: 'Internal Server Error'});
            } else {
                res.status(200).json(result);
            }
        });
    } catch (error) {
        console.error('Error loading role:', error);
        res.status(500).json({ error: 'Internal Server Error'});
    }
});

module.exports = router;