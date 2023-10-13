require('dotenv').config();
const express = require('express');
const colors = require('colors')
const bodyparser = require('body-parser')
const path = require('path');

const connectDB = require('./config/database');

connectDB();
const app = express();

const cors = require('cors');
app.use(cors());

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use('/api/v1', require('./routes/mailRoute'));
app.use('/api/v1', require('./routes/letterRoute'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../front/build')))

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'front', 'build', 'index.html')
    )
)
} else {
  app.get('/', (req, res) => res.send('Set to production mode'))
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
