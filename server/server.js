const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// serve static assets from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// serve index.html for any unmatched route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
