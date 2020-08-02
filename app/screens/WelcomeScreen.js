import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={2}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" color="primary" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
