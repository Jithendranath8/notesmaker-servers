const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const workspaceRoutes = require('./routes/workspaceRoutes');
const noteRoutes = require('./routes/noteRoutes');      
const folderRoutes = require('./routes/folderRoutes');  

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.use('/api/workspaces', workspaceRoutes);

app.use('/api/notes', noteRoutes);         
app.use('/api/folders', folderRoutes);    
 

module.exports = app;
