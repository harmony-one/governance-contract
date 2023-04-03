const { ethers } = require("hardhat");

const deployGovernance = async (hre) => {
    const { deploy, get } = hre.deployments;
    const { deployer } = await hre.getNamedAccounts();

    const voteToken = await get("VoteToken");
    const governanceTimelockController = await get("GovernanceTimelockController");

    await deploy("Governance", {
        from: deployer,
        args: [minDelay, voteToken.address, governanceTimelockController.address],
        log: true,
    });
};
module.exports = deployGovernance;
deployGovernance.tags = ["Governance"];
