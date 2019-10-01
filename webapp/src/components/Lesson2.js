import React from "react";
import RainbowBox from "./RainbowBox";
import { drizzleConnect } from "@drizzle/react-plugin";
import {
  toggleWrongNetworkModal,
  toggleTxStartModal,
  setCurrentTxId,
  addProgressAlert,
  updateProgressAlertRemainingTime,
  updateProgressAlertTxFee
} from "./../core/redux/actions";
import { Heading, Box, Flex, Button, Pill, Text, Card } from "rimble-ui";

function Lesson2({
  setRoute,
  toggleWrongNetworkModal,
  toggleTxStartModal,
  setCurrentTxId,
  addProgressAlert,
  updateProgressAlertRemainingTime,
  updateProgressAlertTxFee
}) {
  const handleTxStartModal = () => {
    addProgressAlert({
      token: {
        id: "DevConAttendance",
        name: "Conference ticket",
        ethPrice: "5.63",
        image: "conference.png",
        successTitle: "You're going to DevCon!",
        successInstructions:
          "Just show this ticket token in your wallet when you arrive at the conference venue.",
        tokenId: 99,
        contractAddress:
          "https://rinkeby.etherscan.io/address/0xb0a4ba3e61f4610d7c3f498a08acd24fd585f056",
        txHash:
          "https://rinkeby.etherscan.io/tx/0x632c1a2f1002cdb2d7e11c18c314a1732d89f616613f89f0ea86b8973b0edcca",
        gasUsed: 89021,
        cumulativeGasUsed: 143204
      }
    });
    updateProgressAlertRemainingTime({
      txHash: "0x123",
      content: {}
    });
    updateProgressAlertTxFee({
      txHash: "0x123",
      content: {}
    });
    setCurrentTxId(0);
    toggleTxStartModal(true);
  };

  return (
    <Box>
      <Box maxWidth={"1180px"} p={3} mx={"auto"}>
        <Card borderRadius={"15px 15px 15px 15px"} p={0} mx={2} my={2}>
          <RainbowBox
            borderRadius={"15px 15px 0px 0px"}
            height={"10px"}
            borderColor={"#d6d6d6"}
          />
          <Flex alignItems="center">
            <Box width={1 / 2} style={{ textAlign: "left" }}>
              <Button.Text
                ml={3}
                mt={3}
                onClick={() => {
                  setRoute("Lesson1");
                }}
              >
                Previous
              </Button.Text>
            </Box>
            <Box width={1 / 2} style={{ textAlign: "right" }}>
              <Button.Text
                mr={3}
                mt={3}
                onClick={() => {
                  setRoute("Lesson3");
                }}
              >
                Next
              </Button.Text>
            </Box>
          </Flex>
          <Box style={{ textAlign: "center" }}>
            <Pill mb={3} color="primary">
              Lesson 2
            </Pill>
            <Heading.h1 mb={3} textAlign="center">
              Prevention is priority
            </Heading.h1>
            <Text fontSize="5" textAlign="center">
              • Anticipate and design for transaction errors throughout your
              dApp
            </Text>
            <Text fontSize="5" textAlign="center">
              • Transaction failure due to fees "feels like a scam"
            </Text>
            <Text fontSize="5" textAlign="center">
              • What information does a user need to avoid errors?
            </Text>
            <Text fontSize="5" textAlign="center">
              • Friction can help increase trust and confidence
            </Text>
          </Box>
          <Box my={4} style={{ textAlign: "center" }}>
            <Button
              size={"medium"}
              mr={3}
              mb={3}
              onClick={() => {
                toggleWrongNetworkModal(true);
              }}
            >
              Show wrong network modal
            </Button>
            <Button size={"medium"} mr={3} mb={3} onClick={handleTxStartModal}>
              Show transaction confirmation
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}

/*
 * Export connected component.
 */

const mapDispatchToProps = dispatch => {
  return {
    toggleWrongNetworkModal: value => dispatch(toggleWrongNetworkModal(value)),
    toggleTxStartModal: value => dispatch(toggleTxStartModal(value)),
    setCurrentTxId: value => dispatch(setCurrentTxId(value)),
    addProgressAlert: value => dispatch(addProgressAlert(value)),
    updateProgressAlertRemainingTime: value =>
      dispatch(updateProgressAlertRemainingTime(value)),
    updateProgressAlertTxFee: value => dispatch(updateProgressAlertTxFee(value))
  };
};

export default drizzleConnect(Lesson2, null, mapDispatchToProps);
