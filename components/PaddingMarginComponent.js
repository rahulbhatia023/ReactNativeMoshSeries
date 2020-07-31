import React from "react";
import { StyleSheet, View } from "react-native";

export default function PaddingMarginComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.padding}>
        <View style={{ backgroundColor: "gold", width: 50, height: 50 }} />
      </View>
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
          margin: 20,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  padding: {
    backgroundColor: "dodgerblue",
    height: 100,
    width: 100,
    padding: 20,
    paddingLeft: 30,
  },
});
