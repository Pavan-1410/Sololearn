import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import bodyParser from 'body-parser';
import videoRoutes from './routes/videoRoutes.js'; // ✅ Added

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://abhishek:abhishek@uptoskills.s5fii1y.mongodb.net/?retryWrites=true&w=majority&appName=Uptoskills', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));

// ✅ Mount video routes
app.use("/api/videos", videoRoutes);

// Use multer for file uploads (memory storage)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Image schema and model
const ImageSchema = new mongoose.Schema({
  image: Buffer,
  contentType: String,
  createdAt: { type: Date, default: Date.now }
});
const ImageModel = mongoose.model('Image', ImageSchema);

// ✅ Upload API
app.post('/api/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No image file uploaded' });

    const newImage = new ImageModel({
      image: req.file.buffer,
      contentType: req.file.mimetype,
    });

    await newImage.save();

    res.json({ message: 'Image uploaded successfully', id: newImage._id });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ✅ View image by ID
app.get('/view-image/:id', async (req, res) => {
  try {
    const imageDoc = await ImageModel.findById(req.params.id);
    if (!imageDoc) return res.status(404).send('Image not found');

    res.set('Content-Type', imageDoc.contentType);
    res.send(imageDoc.image);
  } catch (err) {
    console.error('Image view error:', err);
    res.status(500).send('Server error');
  }
});

app.listen(5000, () => console.log('🚀 Server running on http://localhost:5000'));
