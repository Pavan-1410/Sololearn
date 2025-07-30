import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/index.js';

// Load environment variables
dotenv.config();

// Validate critical environment variables
const requiredEnvVars = ['DATABASE_URL'];
const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingEnvVars.length > 0) {
  console.error(`Missing required environment variables: ${missingEnvVars.join(', ')}`);
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', router);


// Define Question Schema
const questionSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  votes: { type: Number, default: 0 },
  tags: [String],
  answers: { type: Number, default: 0 },
  date: { type: Date, default: Date.now }
});
const Question = mongoose.model('Question', questionSchema);

// API Routes

// Get all questions
app.get('/api/questions', async (req, res) => {
  try {
    const questions = await Question.find().sort({ date: -1 });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Post a new question
app.post('/api/questions', async (req, res) => {
  try {
    const { title, content, author, tags } = req.body;
    const question = new Question({ title, content, author, tags });
    await question.save();
    res.status(201).json(question);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Upvote/downvote a question
app.patch('/api/questions/:id/vote', async (req, res) => {
  try {
    const { vote } = req.body; // vote: +1 or -1
    const question = await Question.findByIdAndUpdate(
      req.params.id,
      { $inc: { votes: vote } },
      { new: true }
    );
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }
    res.json(question);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//screenshots attempts
app.use("/api/screenshot-attempt", router);

// (Optional) Health check route
app.get('/', (req, res) => {
  res.send('API is running');
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
