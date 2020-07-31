import React from "react";
import { View } from "react-native";
export default function FlexboxComponent() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          height: 100,
          width: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          height: 100,
          width: 100,
          top: 20,
          left: 20,
          position: "absolute",
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          height: 100,
          width: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "grey",
          height: 100,
          width: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "green",
          height: 100,
          width: 100,
        }}
      />
    </View>
  );
}
