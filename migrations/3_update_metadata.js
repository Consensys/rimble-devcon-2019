var AttendanceMetadata = artifacts.require("./AttendanceMetadata.sol");
var HackathonMetadata = artifacts.require("./HackathonMetadata.sol");
var PartiesMetadata = artifacts.require("./PartiesMetadata.sol");
var DevConAttendance = artifacts.require("./DevConAttendance.sol");
var DevConHackathon = artifacts.require("./DevConHackathon.sol");
var DevConParties = artifacts.require("./DevConParties.sol");

let _ = "        ";

module.exports = (deployer, helper, accounts) => {
  deployer.then(async () => {
    try {
      // Deploy AttendanceMetadata.sol
      await deployer.deploy(AttendanceMetadata, { replace: true });
      let attendanceMetadata = await AttendanceMetadata.deployed();
      console.log(
        _ + "AttendanceMetadata deployed at: " + attendanceMetadata.address
      );

      // Deploy PartiesMetadata.sol
      await deployer.deploy(PartiesMetadata, { replace: true });
      let partiesMetadata = await PartiesMetadata.deployed();
      console.log(
        _ + "PartiesMetadata deployed at: " + partiesMetadata.address
      );

      // Deploy HackathonMetadata.sol
      await deployer.deploy(HackathonMetadata, { replace: true });
      let hackathonMetadata = await HackathonMetadata.deployed();
      console.log(
        _ + "HackathonMetadata deployed at: " + hackathonMetadata.address
      );
      // Deploy DevConAttendance.sol
      let devConAttendance = await DevConAttendance.deployed();
      console.log(
        _ + "DevConAttendance deployed at: " + devConAttendance.address
      );

      // Deploy DevConHackathon.sol
      let devConHackathon = await DevConHackathon.deployed();
      console.log(
        _ + "DevConHackathon deployed at: " + devConHackathon.address
      );

      // Deploy DevConParties.sol
      let devConParties = await DevConParties.deployed();
      console.log(_ + "DevConParties deployed at: " + devConParties.address);

      // Update the devConAttendance with the new metadata address
      await devConAttendance.updateMetadata(attendanceMetadata.address);
      console.log(
        _ + "DevConAttendance metadata updated to " + attendanceMetadata.address
      );

      // Update the devConFood with the new metadata address
      await devConHackathon.updateMetadata(hackathonMetadata.address);
      console.log(
        _ + "DevConHackathon metadata updated to " + hackathonMetadata.address
      );

      // Update the devConParties with the new metadata address
      await devConParties.updateMetadata(partiesMetadata.address);
      console.log(
        _ + "DevConParties metadata updated to " + partiesMetadata.address
      );
    } catch (error) {
      console.log(error);
    }
  });
};
