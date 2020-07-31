import React from "react";
import {
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";

export default function TouchableComponent() {
  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => console.log("TouchableWithoutFeedback")}
      >
        <Image source={require("../assets/favicon.png")} />
      </TouchableWithoutFeedback>

      <TouchableOpacity onPress={() => console.log("TouchableOpacity")}>
        <Image source={require("../assets/favicon.png")} />
      </TouchableOpacity>

      <TouchableHighlight onPress={() => console.log("TouchableHighlight")}>
        <Image source={require("../assets/favicon.png")} />
      </TouchableHighlight>

      <TouchableNativeFeedback>
        <View
          style={{ height: 70, width: 200, backgroundColor: "dodgerblue" }}
        />
      </TouchableNativeFeedback>
    </View>
  );
}
