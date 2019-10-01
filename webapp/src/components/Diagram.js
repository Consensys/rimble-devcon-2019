import React from "react";
import RainbowBox from "./RainbowBox";
import { Box, Flex, Image, Card, Link } from "rimble-ui";
import diagramHeading from "./../images/rimble-ethereum-transaction-flow-headers.png";
import diagramSwimlanes from "./../images/rimble-ethereum-transaction-flow-swimlanes.png";
import fullDiagram from "./../images/rimble-ethereum-transaction-flow-swimlane-diagram.png";

function Diagram() {
  return (
    <Box zIndex={"9"}>
      <Box maxWidth={"1180px"} p={3} mx={"auto"}>
        <Card borderRadius={"15px 15px 15px 15px"} p={0} mx={2} my={2}>
          <RainbowBox
            borderRadius={"15px 15px 0px 0px"}
            height={"10px"}
            borderColor={"#d6d6d6"}
          />
          <Box my={2} style={{ textAlign: "center" }}>
            <Image src={diagramHeading} />
            <Box height={"50vh"} overflow={"scroll"}>
              <Image src={diagramSwimlanes} />
              <Flex justifyContent={"flex-end"} m={3}>
                <Link
                  href={fullDiagram}
                  target={"_blank"}
                  fontSize={0}
                  title={
                    "Download Rimble's Transaction Ethereum Lifecycle Diagram"
                  }
                >
                  Download Rimble's Transaction Ethereum Lifecycle Diagram
                </Link>
              </Flex>
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}

export default Diagram;
