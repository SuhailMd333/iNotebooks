const connectToMongo = require("./db");
const express = require("express");
connectToMongo();
var cors = require('cors')
var app = express()
// const a = app.use(express.urlencoded());
app.use(cors())
const port = 5000;

 app.use(express.json())


app.use("/api/auth", require("./routes/auth"));

app.use("/api/notes", require("./routes/notes"));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
