const PRESALE = artifacts.require("Keep4rPresale");
const KP4R = artifacts.require("Keep4rToken");

module.exports = async function (deployer) {
    const kp4r = await KP4R.deployed();

    await deployer.deploy(PRESALE, kp4r.address);
    console.log("Keep4rPresale deployed");
};
