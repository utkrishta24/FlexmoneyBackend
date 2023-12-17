const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://krishsinha2406:<8e$9p#NyjzAJxKU>@cluster0.p9lturr.mongodb.net/?retryWrites=true&w=majority');

const admissionSchema = new mongoose.Schema({
  name: String,
  age: Number,
  selectedBatch: String,
});

const Admission = mongoose.model('Admission', admissionSchema);

app.get('/', (req, res) => {
  res.send('Welcome to the Flex Money Yoga Classes API');
});

app.post('/submit', async (req, res) => {
  const { name, age, selectedBatch } = req.body;

  if (!name || !age || !selectedBatch) {
    return res.status(400).json({ error: 'Please provide all required information.' });
  }

  const admission = new Admission({
    name,
    age,
    selectedBatch,
  });

  try {
    await admission.save();
    const paymentResult = CompletePayment(name, age, selectedBatch);
    res.json({ success: true, paymentResult });
  } catch (error) {
    console.error('Error saving admission:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

function CompletePayment(name, age, selectedBatch) {
  return `Payment completed for ${name} (${age} years) for batch ${selectedBatch}`;
}