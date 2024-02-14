const Claim = require("../models/claims");
const crudRepository = require("./crud_repository");

class ClaimRepository extends crudRepository {
  constructor() {
    super(Claim);
  }

  async findBy(data) {
    try {
      const response = await User.findOne(data);
      //console.log(response);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ClaimRepository;
