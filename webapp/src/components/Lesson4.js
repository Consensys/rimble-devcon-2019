import React from "react";
import RainbowBox from "./RainbowBox";
import { drizzleConnect } from "@drizzle/react-plugin";
import {
  toggleTxPendingModal,
  setCurrentTxId,
  addProgressAlert,
  updateProgressAlertRemainingTime,
  updateProgressAlertTxFee
} from "./../core/redux/actions";
import { Heading, Box, Flex, Button, Pill, Text, Card } from "rimble-ui";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Lesson4({
  setRoute,
  toggleTxPendingModal,
  setCurrentTxId,
  addProgressAlert,
  updateProgressAlertRemainingTime,
  updateProgressAlertTxFee
}) {
  const handleTxPendingModal = () => {
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
    toggleTxPendingModal(true);
  };

  const handleTooManyTx = () => {
    const messages = [
      "Transaction success!",
      "Transaction receipt confirmed",
      "Transaction confirmation 12",
      "Transaction confirmation 11",
      "Transaction confirmation 10",
      "Transaction confirmation 9",
      "Transaction confirmation 8",
      "Transaction confirmation 7",
      "Transaction confirmation 6",
      "Transaction confirmation 5",
      "Transaction confirmation 4",
      "Transaction confirmation 3",
      "Transaction confirmation 2",
      "Transaction confirmation 1",
      "Transaction pending",
      "Transaction accepted to mempool",
      "Sending transaction to mempool",
      "Signing transaction",
      "Creating transaction hash",
      "Initiating transaction"
    ];

    (function displayMessages(i) {
      setTimeout(function() {
        toast.success(messages[i], {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000
        });
        if (--i) displayMessages(i);
      }, 200);
    })(messages.length);
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
                  setRoute("Lesson3");
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
                  setRoute("Lesson5");
                }}
              >
                Next
              </Button.Text>
            </Box>
          </Flex>
          <Box style={{ textAlign: "center" }}>
            <Pill mb={3} color="primary">
              Lesson 4
            </Pill>
            <Heading.h1 mb={3} textAlign="center">
              Provide "just-enough" feedback
            </Heading.h1>
            <Text fontSize="5" textAlign="center">
              • Mass market doesn't need technical details
            </Text>
            <Text fontSize="5" textAlign="center">
              • Use existing metaphors
            </Text>
            <Text fontSize="5" textAlign="center">
              • Users don't sit and watch transactions go through
            </Text>
            <Text fontSize="5" textAlign="center">
              • Don't force feedback on users
            </Text>
          </Box>
          <Box my={4} style={{ textAlign: "center" }}>
            <Button size={"medium"} mr={3} mb={3} onClick={handleTooManyTx}>
              Show too much feedback
            </Button>
            <Button
              size={"medium"}
              mr={3}
              mb={3}
              onClick={handleTxPendingModal}
            >
              Start transaction
            </Button>
          </Box>
        </Card>
      </Box>
      <ToastContainer />
    </Box>
  );
}

/*
 * Export connected component.
 */

const mapDispatchToProps = dispatch => {
  return {
    toggleTxPendingModal: value => dispatch(toggleTxPendingModal(value)),
    setCurrentTxId: value => dispatch(setCurrentTxId(value)),
    addProgressAlert: value => dispatch(addProgressAlert(value)),
    updateProgressAlertRemainingTime: value =>
      dispatch(updateProgressAlertRemainingTime(value)),
    updateProgressAlertTxFee: value => dispatch(updateProgressAlertTxFee(value))
  };
};

export default drizzleConnect(Lesson4, null, mapDispatchToProps);
