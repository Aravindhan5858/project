const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./Routes/userRoutes');
const blogRoutes = require('./Routes/blogRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json()); // <-- Ensures JSON bodies are parsed
app.use(cors());

// Routes
app.use('/api/auth', userRoutes);
app.use('/api/blog', blogRoutes);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));