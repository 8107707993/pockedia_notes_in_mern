const express = require('express');
const connectToMongodb = require('./db');
const cors = require('cors');

connectToMongodb();

const app = express()
const port = 4000

app.use(cors())
app.use(express.json())

// Available Routes 
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`Pockedia-backend listening at http://localhost:${port}`)
})