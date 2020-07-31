import React from "react";
import { View, Image } from "react-native";

export default function ImageComponent() {
  return (
    <View>
      <Image source={require("../assets/favicon.png")} />
      <Image
        blurRadius={1}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
        }}
      />
    </View>
  );
}
