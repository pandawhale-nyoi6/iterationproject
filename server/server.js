const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const placesRouter = require('./routes/placesRouter')

app.use(express.json());

// serve static assets from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

//route to SQL for any requests to the /places endpoint
app.use('/places', placesRouter)

// serve index.html for any unmatched route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
