import React from "react";
import { View } from "react-native";

export default function containerCard(...props) {
  return <View>{props.children}</View>;
}
