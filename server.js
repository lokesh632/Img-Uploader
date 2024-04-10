
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3001;

app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(express.json());

app.post('/image', upload.single('file'), (req, res) => {
  res.status(200).send('File uploaded successfully');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});