const express = require("express");
const connect = require("./config/database");
const PORT = 3000;
const app = express();
const User = require("./models/user");
const router = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(PORT, async () => {
  console.log(`Server started running successfully on PORT:${PORT}`);
  connect();
  console.log("Mongo DB connected");
  User.create({
    name: "Sourav",
    mail: "pandu.com",
    age: 16,
  });
});
