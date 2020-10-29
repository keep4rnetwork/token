
const PRESALE = artifacts.require("Keep4rPresale");

module.exports = async function (deployer) {
    await deployer.deploy(PRESALE, "0xA89ac6e529aCf391CfbBD377F3aC9D93eae9664e");
    console.log("Keep4rPresale deployed");
};
