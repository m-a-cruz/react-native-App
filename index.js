const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authenticateToken = require('./app/middleware/auth.config');
const registerRoute = require('./app/routes/register');
const loginRoute = require('./app/routes/login');
const categoryRoute = require('./app/routes/category');
const taskRoute = require('./app/routes/task');
const usersRoute = require('./app/routes/users');
const app = express();
const PORT = process.env.PORT||3000;

app.use(cors());
app.use(bodyParser.json());

//USERS ROUTES
app.post('/register', registerRoute);
app.post('/login', loginRoute);
app.get('/users', authenticateToken, usersRoute);
app.get('/user/:id', authenticateToken, usersRoute);
app.put('/user/:id', authenticateToken, usersRoute);
app.delete('/user/:id', authenticateToken, usersRoute);

//CATEGORIES ROUTES
app.post('/category',authenticateToken, categoryRoute);
app.get('/category/:id', authenticateToken, categoryRoute);
app.get('/categories', authenticateToken, categoryRoute);
app.put('/category/:id', authenticateToken, categoryRoute);

//TASK ROUTES
app.post('/task', authenticateToken, taskRoute);
app.get('/task/:id', authenticateToken, taskRoute);
app.get('/tasks', authenticateToken, taskRoute);
app.put('/task/:id', authenticateToken, taskRoute);
app.delete('/task/:id', authenticateToken, taskRoute);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
