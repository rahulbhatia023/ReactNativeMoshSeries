import React from "react";
import { StyleSheet, View } from "react-native";

export default function ShadowComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.shadow}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  shadow: {
    backgroundColor: "dodgerblue",
    height: 100,
    width: 100,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    elevation: 50,
  },
});
