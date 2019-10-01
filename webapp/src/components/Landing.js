import React, { useState, useEffect } from "react";
import { drizzleConnect } from "@drizzle/react-plugin";
import BuyCardContainer from "./BuyCard.container";
import ConnectionBanner from "@rimble/connection-banner";
import { Box, Flex, Text, Link } from "rimble-ui";
import tokenDetails from "./../tokenDetails";
import appConfig from "../appConfig";

function Landing({ drizzle, drizzleState, drizzleStatus, account, networkId }) {
  const [currentNetwork, setCurrentNetwork] = useState(null);
  const [address, setAddress] = useState(null);

  // Set account
  useEffect(() => {
    if (account) {
      setAddress(account);
    }
  }, [account]);

  // Set current network
  useEffect(() => {
    if (networkId) {
      setCurrentNetwork(networkId);
    }
    if (!drizzleStatus.initialized && window.web3 && drizzle !== null) {
      window.web3.version.getNetwork((error, networkId) => {
        setCurrentNetwork(parseInt(networkId));
      });
    }
  }, [networkId, drizzleStatus, drizzle]);

  return (
    <Box>
      {!drizzleState && (
        <Box m={4}>
          <ConnectionBanner
            currentNetwork={currentNetwork}
            requiredNetwork={appConfig.requiredNetwork}
            onWeb3Fallback={null}
          />
        </Box>
      )}
      <Box maxWidth={"1180px"} p={3} mx={"auto"}>
        <Text my={4} />
        <Flex justifyContent={"space-between"} mx={-3} flexWrap={"wrap"}>
          {tokenDetails.map(token => {
            return (
              <BuyCardContainer
                token={token}
                address={address}
                key={token.id}
              />
            );
          })}
        </Flex>
        <Flex justifyContent={"flex-end"}>
          <Link href="https://rimble.consensys.design" target="_blank">
            Learn more about Rimble
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}

/*
 * Export connected component.
 */
const mapStateToProps = state => {
  return {
    drizzleStatus: state.drizzleStatus,
    address: state.accounts[0],
    networkId: state.web3.networkId
  };
};

export default drizzleConnect(Landing, mapStateToProps);
