const policies = require("../Policies/");

class Policy_Details {
  async getPolicies(req) {
    return policies;
  }
}

module.exports = new Policy_Details();
