import express from 'express';

const userController = express.Router();

userController.get('/', (req, res) => {
  res.status(200).json({
    status : 'success'
  });
});

export default userController;
