const deployVoteToken = async (hre) => {
  const { deploy } = hre.deployments;
  const { deployer } = await hre.getNamedAccounts();

  await deploy("VoteToken", {
    from: deployer,
    args: [],
    log: true,
  });
};
module.exports = deployVoteToken;
deployVoteToken.tags = ["VoteToken"];