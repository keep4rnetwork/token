// const Migrations = artifacts.require("Migrations");
const KP4R = artifacts.require("Keep4rToken");

module.exports = async function (deployer) {
    await deployer.deploy(KP4R);
    console.log("Keep4rToken deployed");
};
