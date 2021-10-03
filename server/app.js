import express from 'express';

// Initialize Express app
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    status : 'success'
  });
});

// Start server
app.listen(8080, () => {
  console.log('Server starting at 8080');
});
