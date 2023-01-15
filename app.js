const express = require('express');
const mongoose = require('mongoose');
// const firebase = require('firebase');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const authRoutes = require('./routes/auth');
const playlistRoutes = require('./routes/playlists');
const songRoutes = require('./routes/songs');
const authMiddleware = require('./middleware/auth');

const firebase = require('./firebase-init');


const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Initialize Firebase


// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/playlists', authMiddleware.checkToken, playlistRoutes);
app.use('/api/songs', authMiddleware.checkToken, songRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
