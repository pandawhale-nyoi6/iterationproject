const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const cors = require('cors');

const port = 3000;

const apiRouter = require('./routes/apiRouter');


// Define your trusted origins for CORS
const allowedOrigins = [
  'http://localhost:3000',
  // 'https://your-production-domain.com',
];


// added cors and setHeader to try to resolve the "Cross-Origin-Opener-Policy policy would block the window.closed call." error in chrome console after oAuth, but no luck yet
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
    next();
});

app.use(express.json());


// serve static assets from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

//route to SQL for any requests to the /places endpoint
app.use('/api', apiRouter);



// serve index.html for any unmatched route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
