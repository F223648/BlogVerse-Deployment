const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const UserRoutes = require('./routes/UserRoutes');
const PostRoutes = require('./routes/PostRoutes');
const ComRoutes = require('./routes/ComRoutes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/user', UserRoutes);
app.use('/api/posts', PostRoutes);
app.use('/api/comments', ComRoutes);

console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('❌ DB Connection Error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

app.get('/', (req, res) => {
  res.send('Backend is running ✅');
});
