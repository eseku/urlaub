import React from "react";
import { Text } from "react-native";

const Larsseit = props => (
  <Text {...props} style={[props.style, { fontFamily: "larsseit" }]} />
);
export default Larsseit;
