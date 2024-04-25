const express = require('express');
const db = require('../config/db.config');
const bcrypt = require('bcrypt');
const authenticateToken = require('../middleware/auth.config');
const router = express.Router();

//CREATE TASK
router.post('/task', authenticateToken, async (req, res) => {
    const {title, description, user_id, category_id, status_id, due_date} = req.body;
    if(!title || !description || !user_id || !category_id || !status_id || !due_date) {
        return res.status(400).send({ error: true, message: 'Please provide proper title, description, user_id, category_id, due_date and status_id'});
    }
    try{
        db.query('INSERT INTO tasks (title, description, user_id, category_id, status_id, due_date) VALUES (?, ?, ?, ?, ?, ?)', [title, description, user_id, category_id, status_id, due_date], (err, result, fields) => {
            if (err) {
                console.error('Error creating item:', err);
                res.status(500).json({ message: 'Internal Server Error'});
            }else {
                res.status(200).json(result);
            }
        })
    }catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ error: 'Internal Server Error'});
    }
});

//GET ONE TASK
router.get('/task/:id', authenticateToken, (req, res) => {
    let task_id = req.params.id;
    if (!task_id) {
        return res.status(400).send({ error: true, message: 'Please provide task_id'});
    }
    try {
        db.query('SELECT * FROM tasks WHERE id = ?', task_id, (err, result) => {
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

//GET ALL TASKS
router.get('/tasks', authenticateToken, (req, res) => {
    try {
        db.query('SELECT * FROM tasks', (err, result) => {
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

//UPDATE TASK
router.put('/task/:id', authenticateToken, async (req, res) => {
    let task_id = req.params.id;
    const {title, description, user_id, category_id, status_id, due_date} = req.body;
    if(!task_id || !title || !description || !user_id || !category_id || !status_id || !due_date) {
        return res.status(400).send({ error: user, message: 'Please provide proper title, description, user_id, category_id, due_date and status_id'});
    }
    try{
        db.query('UPDATE tasks SET title = ?, description = ?, user_id = ?, category_id = ?, status_id = ?, due_date = ? WHERE id = ?', [title, description, user_id, category_id, status_id, due_date, task_id], (err, result, fields) => {
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
router.delete('/task/:id', authenticateToken, (req, res) => {
    let task_id = req.params.id;
    if (!task_id) {
        return res.status(400).send({ error: true, message: 'Please provide correct task_id'});
    }
    try {
        db.query('DELETE FROM tasks WHERE id = ?', task_id, (err, result, fields) => {
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
