import React from "react";
import { View } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
export default function DeviceOrientationComponent() {
  console.log(useDimensions());
  console.log(useDeviceOrientation());

  const { portrait } = useDeviceOrientation();

  return (
    <View
      style={{
        backgroundColor: "dodgerblue",
        width: "100%",
        height: portrait ? "30%" : "100%",
      }}
    ></View>
  );
}
