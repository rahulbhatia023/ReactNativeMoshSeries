import React from "react";
import { View, Button, Alert } from "react-native";

export default function ButtonComponent() {
  return (
    <View>
      <Button
        color="orange"
        title="Click Me"
        onPress={() => alert("Button Pressed")}
      />
      <Button
        color="orange"
        title="Click Me"
        onPress={() =>
          Alert.alert("My Title", "My message", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
      />
    </View>
  );
}
