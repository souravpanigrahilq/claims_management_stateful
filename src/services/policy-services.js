const PolicyHolderRepository = require("../Repository/policyholder_repository");

class PolicyService {
  constructor() {
    this.policyHolderRepository = new PolicyHolderRepository();
  }

  async signUp(data) {
    try {
      const PolicyHolder = await this.policyHolderRepository.create(data);
      return PolicyHolder;
    } catch (error) {
      console.log(h12)
      throw error;
    }
  }

  async getPolicy(data) {
    try {
      const PolicyHolder = await this.policyHolderRepository.get(data);
      return PolicyHolder;
    } catch (error) {
      throw error;
    }
  }

  async updatePolicy(id, data) {
    try {
      // Find policy by id
      let policy = await this.policyHolderRepository.update(id, data);
      policy = await policy.save();
      return policy;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PolicyService;
