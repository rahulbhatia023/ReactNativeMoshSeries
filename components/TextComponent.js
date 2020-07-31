import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function TextComponent() {
  const onPressHandler = () => console.log("Used onPress via handler !!");
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={styles.text}
          numberOfLines={1}
          onPress={() => console.log("Used onPress via inline !!")}
        >
          Press me to get console log using inline approach
        </Text>
        <Text numberOfLines={1} onPress={onPressHandler}>
          Press me to get console log using handler approach
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "tomato",
    textTransform: "capitalize",
    textDecorationLine: "underline",
    textAlign: "justify",
    lineHeight: 30,
  },
});
