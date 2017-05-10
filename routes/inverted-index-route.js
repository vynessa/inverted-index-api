import express from 'express';
import InvertedIndex from '../src/inverted-index.js';

// Call an instance of Router from express
const router = express.Router();
const invController = new InvertedIndex();

// Create route  
router.post('/api/create', (req, res) => {
  invController.createIndex('ValidFile', req.body);
  res.json(invController.allIndices);
});

// Search route 
router.post('/api/search', (req, res) => {
  const index = invController.allIndices;
  const filename = req.body.fileName;
  const searchTerms = req.body.searchTerms;

  const searchResult = invController.searchIndex(index, filename, ...searchTerms);
  res.json(searchResult);
});


module.exports = router;
