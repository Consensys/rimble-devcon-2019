var AttendanceMetadata = artifacts.require("./AttendanceMetadata.sol");
var PartiesMetadata = artifacts.require("./PartiesMetadata.sol");
var HackathonMetadata = artifacts.require("./HackathonMetadata.sol");
var DevConAttendance = artifacts.require("./DevConAttendance.sol");
var DevConHackathon = artifacts.require("./DevConHackathon.sol");
var DevConParties = artifacts.require("./DevConParties.sol");

let _ = "        ";

module.exports = (deployer, helper, accounts) => {
  deployer.then(async () => {
    try {
      // Deploy AttendanceMetadata.sol
      await deployer.deploy(AttendanceMetadata);
      let attendanceMetadata = await AttendanceMetadata.deployed();
      console.log(
        _ + "AttendanceMetadata deployed at: " + attendanceMetadata.address
      );

      // Deploy DevConAttendance.sol
      await deployer.deploy(
        DevConAttendance,
        "DevCon VI Attendance",
        "DC6A",
        metadata.address
      );
      let devConAttendance = await DevConAttendance.deployed();
      console.log(
        _ + "DevConAttendance deployed at: " + devConAttendance.address
      );

      // Deploy HackathonMetadata.sol
      await deployer.deploy(HackathonMetadata);
      let hackathonMetadata = await HackathonMetadata.deployed();
      console.log(
        _ + "HackathonMetadata deployed at: " + hackathonMetadata.address
      );

      // Deploy DevConHackathon.sol
      await deployer.deploy(
        DevConHackathon,
        "DevCon VI Hackathon",
        "DC6F",
        hackathonMetadata.address
      );
      let devConHackathon = await DevConHackathon.deployed();
      console.log(
        _ + "DevConHackathon deployed at: " + devConHackathon.address
      );

      // Deploy PartiersMetadata.sol
      await deployer.deploy(PartiesMetadata);
      let partiesMetadata = await PartiesMetadata.deployed();
      console.log(
        _ + "PartiesMetadata deployed at: " + partiesMetadata.address
      );

      // Deploy DevConParties.sol
      await deployer.deploy(
        DevConParties,
        "DevCon VI Parties",
        "DC6P",
        metadata.address
      );
      let devConParties = await DevConParties.deployed();
      console.log(_ + "DevConParties deployed at: " + devConParties.address);
    } catch (error) {
      console.log(error);
    }
  });
};
