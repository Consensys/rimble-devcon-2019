import React, { useState, useEffect } from "react";
import HeaderNav from "./HeaderNav";
import Landing from "./Landing";
import Diagram from "./Diagram";
import Lesson1 from "./Lesson1";
import Lesson2 from "./Lesson2";
import Lesson3 from "./Lesson3";
import Lesson4 from "./Lesson4";
import Lesson5 from "./Lesson5";
import LessonNavigation from "./LessonNavigation";
import ProgressAlertContainer from "../core/utilities/ProgressAlert.container";
import { Box, Flex } from "rimble-ui";

function Body({ drizzle, drizzleState, store }) {
  const [address, setAddress] = useState(null);
  const [route, setRoute] = useState("Home");

  useEffect(() => {
    if (drizzleState) {
      setAddress(drizzleState.accounts["0"]);
    }
  }, [drizzleState]);

  const preflightCheck = () => {
    if (window.ethereum) {
      window.ethereum.enable();
    }
  };

  return (
    <Box height={"100%"}>
      <Flex
        flexDirection={"column"}
        justifyContent={"space-between"}
        height={"100%"}
      >
        <HeaderNav
          drizzle={drizzle}
          drizzleState={drizzleState}
          preflightCheck={preflightCheck}
        />
        {
          {
            Home: <Landing drizzle={drizzle} drizzleState={drizzleState} />,
            Diagram: <Diagram setRoute={setRoute} />,
            Lesson1: (
              <Lesson1 address={address} store={store} setRoute={setRoute} />
            ),
            Lesson2: (
              <Lesson2 address={address} store={store} setRoute={setRoute} />
            ),
            Lesson3: (
              <Lesson3 address={address} store={store} setRoute={setRoute} />
            ),
            Lesson4: (
              <Lesson4 address={address} store={store} setRoute={setRoute} />
            ),
            Lesson5: (
              <Lesson5 address={address} store={store} setRoute={setRoute} />
            )
          }[route]
        }
        <LessonNavigation setRoute={setRoute} route={route} />
      </Flex>

      <ProgressAlertContainer
        address={address}
        store={store}
        drizzle={drizzle}
      />
    </Box>
  );
}

export default Body;
