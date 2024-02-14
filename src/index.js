const express = require("express");
const connect = require("./config/database");
const PORT = 3000;
const app = express();
//const User = require("./models/user");
const router = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.send("Welcome to my server from the router!");
});

app.use("/", router);

app.listen(PORT, async () => {
  console.log(`Server started running successfully on PORT:${PORT}`);
  connect();
  console.log("Mongo DB connected");
});
