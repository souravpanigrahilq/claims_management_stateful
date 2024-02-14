const PolicyHolder = require("../models/policyholder");
const crudRepository = require("./crud_repository");

class PolicyHolderRepository extends crudRepository {
  constructor() {
    super(PolicyHolder);
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

module.exports = PolicyHolderRepository;
