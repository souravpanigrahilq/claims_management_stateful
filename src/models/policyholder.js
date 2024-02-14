const mongoose = require("mongoose");

const policyHolderSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  policyid: {
    type: Number,
  },
  sumAssured: {
    type: Number,
  },
  leftAmount: {
    type: Number,
  },
  policyHolderId: {
    type: Number,
  },
  startDate: {
    type: Number,
  },
  endDate: {
    type: Number,
  },
});

const PolicyHolder = mongoose.model("PolicyHolder", policyHolderSchema);
module.exports = PolicyHolder;
