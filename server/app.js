import express from 'express';
import mongoose from 'mongoose';

import { userController } from './controller';

// Initialize Express app
const app = express();

// Dependencies here
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.get('/', (req, res) => {
//   res.status(200).json({
//     status : 'success'
//   });
// });

// Above is same as
app.use('/', userController);

// Start server, connect to mongoDB
app.listen(8080, () => {
  console.log('Server starting at 8080');
  mongoose
    .connect('mongodb://localhose/test')
    .then(() => {
      console.log('Connected to mongoDB at port 27017');
    })
    .catch(() => {
      console.log('uh oh, db not working');
    });
});
