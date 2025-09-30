import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import messageRoutes from './routes/name.js'; 

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Use message routes
app.use('/api', messageRoutes);

app.get('/',(req,res)=>{
    res.send('Hello World!');
})

app.listen(port,()=>{
  console.log(`Server is running on ${port}`);
});