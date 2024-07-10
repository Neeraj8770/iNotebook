const express = require("express");
const connectToMongo = require("./db");
const cors = require("cors");

const app = express();
const port = 3000;

connectToMongo(); // Connect to MongoDB


// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello Neeraj!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


