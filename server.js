
const cors = require("cors");
const express = require('express');
const bodyParser = require('body-parser');
const search = require("./src/Routes/SearchRoute")
const app = express();


app.use(bodyParser.json());
app.use(express.json());
app.use(cors({ origin: ['https://www.amazon.com']}))

//app.use(cors())

app.use('/', search);


const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server runing on ${PORT}`);
});