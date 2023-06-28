const port = 3002; // Choose a port number
const cors = require("cors");
const express = require('express');
const bodyParser = require('body-parser');
const search = require("./src/Routes/SearchRoute")
const app = express();


app.use(bodyParser.json());
app.use(express.json());
app.use(cors())

app.use('/', search);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
