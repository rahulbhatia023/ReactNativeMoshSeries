import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Screen from "../app/components/Screen";
import { Switch } from "react-native-gesture-handler";

export default function SwitchComponent() {
  const [isNew, setIsNew] = useState(false);
  return (
    <Screen>
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    </Screen>
  );
}

const styles = StyleSheet.create({});
