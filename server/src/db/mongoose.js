const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => console.log('DB Connection Successful'))
  .catch((err) => console.log('Error when connectiong to DB: ', err));
