import React from "react";
import { View, ActivityIndicator } from "react-native";
const MyActivityIndicator = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", flexDirection: "row" }}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  };

export {MyActivityIndicator};