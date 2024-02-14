const ClaimRepository = require("../Repository/claim_repository");
class ClaimService {
  constructor() {
    this.claimRepository = new ClaimRepository();
  }

  async signUp(data) {
    try {
      const claim = await this.claimRepository.create(data);
      return claim;
    } catch (error) {
      throw error;
    }
  }
  async getClaim(data) {
    try {
      const Claim = await this.claimRepository.get(data);
      return Claim;
    } catch (error) {
      throw error;
    }
  }
}

module.exports =  ClaimService;
