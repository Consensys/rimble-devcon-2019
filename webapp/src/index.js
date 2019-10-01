import React from "react";
import ReactDOM from "react-dom";
import DrizzleLoader from "./components/DrizzleLoader";
import * as serviceWorker from "./serviceWorker";

import backgroundImage from "./images/background.jpg";
import { Box } from "rimble-ui";
import styled from "styled-components";

const BodyBox = styled(Box)`
  background: no-repeat center center url(${backgroundImage}) #fffff8;
  height: 100%;
`;

ReactDOM.render(
  <BodyBox>
    <DrizzleLoader />
  </BodyBox>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
