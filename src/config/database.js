const mongoose = require("mongoose");
const connect = async () => {
  await mongoose.connect(
    "mongodb+srv://souravpanigrahi:sourav123@cluster0.chmi1or.mongodb.net/?retryWrites=true&w=majority"
  );
};

module.exports = connect;
