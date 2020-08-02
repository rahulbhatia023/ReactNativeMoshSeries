import React from "react";
import { StyleSheet, TextInput } from "react-native";

import Screen from "../app/components/Screen";

export default function TextInputComponent() {
  return (
    <Screen>
      <TextInput
        placeholder="First Name"
        style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
        maxLength={10}
        keyboardType="numeric"
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
