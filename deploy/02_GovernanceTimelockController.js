const deployGovernanceTimelockController = async (hre) => {
    const { deploy } = hre.deployments;
    const { deployer } = await hre.getNamedAccounts();

    const minDelay = 3600 * 24; // 1 day

    await deploy("GovernanceTimelockController", {
        from: deployer,
        args: [minDelay, [], []],
        log: true,
    });
};
module.exports = deployGovernanceTimelockController;
deployGovernanceTimelockController.tags = ["GovernanceTimelockController"];
