// Drizzle contracts
import DevConAttendance from "./contracts/DevConAttendance.json";
import DevConHackathon from "./contracts/DevConHackathon.json";
import DevConParties from "./contracts/DevConParties.json";

const drizzleOptions = {
  contracts: [DevConAttendance, DevConHackathon, DevConParties],
  web3: {
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:9545"
    }
  }
};

export default drizzleOptions;
