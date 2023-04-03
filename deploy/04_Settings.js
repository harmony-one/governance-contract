const { ethers } = require("hardhat");

const deploySettings = async (hre) => {
    const { deploy, get } = hre.deployments;
    const { deployer } = await hre.getNamedAccounts();

    const PROPOSER_ROLE = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("PROPOSER_ROLE"));
    const EXECUTOR_ROLE = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("EXECUTOR_ROLE"));

    // get GovernanceTimelockController contract
    const governanceTimelockController = await ethers.getContract("GovernanceTimelockController");
    const governance = await get("Governance");

    // set GovernanceTimelockerController configuration
    await governanceTimelockController.grantRole(PROPOSER_ROLE, governance.address);
    await governanceTimelockController.grantRole(EXECUTOR_ROLE, governance.address);
};
module.exports = deploySettings;
deploySettings.tags = ["Settings"];
