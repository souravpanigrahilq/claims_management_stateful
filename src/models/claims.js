const mongoose = require("mongoose");
const claimScehma = new mongoose.Schema({
  claimamt: {
    type: Number,
  },
  claimdate: {
    type: Number,
  },
  policyHolderId: {
    type: Number,
  },
});

const Claim = mongoose.model("Claim", claimScehma);

module.exports = Claim;
