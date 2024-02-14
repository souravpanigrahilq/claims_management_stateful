const express = require("express");

const router = express.Router();

const ClaimService = require("../services/claim-services");
const claim_service = new ClaimService();

const Policy_service = require("../services/policy-services");
const policy_service = new Policy_service();

const Policy_Details = require("../services/policy_details");

const UserService = require("../services/user-services");
const userService = new UserService();

router.post("/user", async (req, res) => {
  try {
    const user = await userService.signUp(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error("hi");
    console.error(error);
    res.status(500).send("Error creating user");
  }
});

router.get("/user/:id", async (req, res) => {
  try {
    const user = await userService.getUser(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error getting user");
  }
});

router.get("/policiesdets", async (req, res) => {
  const policies = await Policy_Details.getPolicies();
  res.json(policies);
});

router.post("/policyholder", async (req, res) => {
  try {
    const policyholder = await policy_service.signUp(req.body);
    res.status(201).json(policyholder);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating user");
  }
});

router.get("/policyholder/:id", async (req, res) => {
  try {
    const policyholder = await policy_service.getPolicy(req.params.id);
    res.status(200).json(policyholder);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error getting PolicyHolder");
  }
});

router.post("/claim", async (req, res) => {
  try {
    const claim = await claim_service.signUp(req.body);
    res.status(201).json(claim);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating claim");
  }
});

router.get("/claim/:id", async (req, res) => {
  try {
    const policyholder = await claim_service.getClaim(req.params.id);
    res.status(200).json(policyholder);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error getting PolicyHolder");
  }
});

module.exports = router;
