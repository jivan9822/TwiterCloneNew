const express = require('express');
require('dotenv').config({ path: 'config.env' });
require('./Src/Middleware/Mongoose'); // data base connection
const userRoute = require('./Src/Routes/UserRoute');
const cors = require('cors');
const multer = require('multer');
const cookieParser = require('cookie-parser');
const AppError = require('./Src/Utils/AppError');
const { globalErrorHandler } = require('./Src/Utils/GlobalErrorHandler');

const app = express();
app.use(multer().any());
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  })
);

app.use('/user', userRoute); // '/user/registration';

app.all('*', (req, res, next) => {
  return next(new AppError(`The ${req.originalUrl} not found in server!`, 400));
});

app.use(globalErrorHandler);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
