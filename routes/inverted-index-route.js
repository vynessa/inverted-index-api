import express from 'express';
import multer from 'multer';
// import bodyParser from 'body-parser';
import InvertedIndex from '../src/inverted-index.js';

// Call an instance of Router from express
const router = express.Router();
const invController = new InvertedIndex();

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './uploads');
  },
  filename: (req, file, callback) => {
    callback(null, `${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

// Create route
router.post('/api/create', upload.array('files'), (req, res) => {
  const files = req.files;
  const fileSpec = invController.getMulterJson(files);
  const index = invController.createIndex(fileSpec);
  res.status(200).json(invController.allIndices);
});

// Search route
router.post('/api/search', (req, res) => {
  const index = invController.allIndices;
  const filename = req.body.fileName;
  const searchTerms = req.body.searchTerms;
  const searchResult = invController.searchIndex(index, filename, ...searchTerms);
  res.status(200).json(searchResult);
});

export default router;
