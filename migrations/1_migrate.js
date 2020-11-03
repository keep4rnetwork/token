
// const TestKP4R = artifacts.require("TestKP4R");
// const StakingPlaceholder = artifacts.require("StakingPlaceholder");
// const Keep4rGovV1 = artifacts.require("Keep4rGovV1")

// module.exports = async function (deployer) {
//     await deployer.deploy(TestKP4R);
//     const testKp4r = (await TestKP4R.deployed()).address;
//     console.log("TestKP4R deployed", testKp4r);

//     await deployer.deploy(StakingPlaceholder, testKp4r);
//     console.log("Staking placeholder desployed");
//     const stakingPlaceholder = (await StakingPlaceholder.deployed()).address;

//     await deployer.deploy(Keep4rGovV1, testKp4r , stakingPlaceholder);
//     console.log("Governance deployed");

// };
