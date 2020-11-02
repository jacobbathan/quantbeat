const express = require('express');
const app = express();
const port = process.env.PORT;
require('./db/mongoose');
const userRouter = require('./routers/user');
const testRouter = require('./routers/test');

app.use(express.json);
app.use(userRouter);
app.use(testRouter);

app.listen(port, () => {
  console.log('Server up on port:', port);
});
