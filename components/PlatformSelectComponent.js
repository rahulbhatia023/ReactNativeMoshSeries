import React from "react";
import { Text, Platform, StyleSheet } from "react-native";

export default function PlatformSelectComponent() {
  return <Text style={styles.text}>I love react native very much !!</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
});
