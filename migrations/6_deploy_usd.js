// artifacts
var SafeMathLib = artifacts.require("./SafeMathLib.sol");
var ERC20Lib = artifacts.require("./ERC20Lib.sol");
var MintableTokenLib = artifacts.require("./MintableTokenLib.sol");
var SmartTokenLib = artifacts.require("./SmartTokenLib.sol");
var BlacklistValidator = artifacts.require("./BlacklistValidator.sol");
var ConstantValidator = artifacts.require("./ConstantValidator.sol");

var TokenStorageLib = artifacts.require("./TokenStorageLib.sol");
var TokenStorage = artifacts.require("./TokenStorage.sol");
var StandardController = artifacts.require("./StandardController.sol");
var MintableTokenLib = artifacts.require("./MintableTokenLib.sol");
var MintableController = artifacts.require("./MintableController.sol");
var SmartController = artifacts.require("./SmartController.sol");
var ConstantSmartController = artifacts.require("./ConstantSmartController.sol");
var USD = artifacts.require("./USD.sol");
var EUR = artifacts.require("./EUR.sol");

// TODO: Registry?

module.exports = function(deployer) {

  deployer.deploy(SmartController, 0x0, BlacklistValidator.address, "USD").then(() => {
    return deployer.deploy(USD, SmartController.address);
    /*
      return deployer.deploy(USD, SmartController.address).then(() => {

        // deploy constantsmartcontroller
        deployer.deploy(ConstantValidator, true);

        var controller = SmartController.at(SmartController.address);
        return deployer.deploy(ConstantSmartController, controller.getStorage(), "USD");
    // return deployer.deploy(ConstantSmartController, 0x0, "USD");
      });
      */
  });

};
