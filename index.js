const express = require('express');
const cors = require('cors');
const fruitsRoutes = require('./server/routes/fruits');

const models = require('./server/db/models')

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/fruits', fruitsRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
