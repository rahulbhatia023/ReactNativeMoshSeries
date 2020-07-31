import React from "react";
import { StyleSheet, View } from "react-native";

export default function BorderComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.border}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  border: {
    backgroundColor: "dodgerblue",
    height: 100,
    width: 100,
    borderWidth: 10,
    borderColor: "royalblue",
    borderRadius: 10,
    borderTopWidth: 20,
    borderTopLeftRadius: 50,
  },
});
