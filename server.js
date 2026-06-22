const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const app = express();
const userRoute = require('./routes/userRoutes');

dotenv.config();
connectDB();
app.use(express.json());

app.use('/api/users', userRoute);

app.get('/', (req, res) => {
  res.send('API is running');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});