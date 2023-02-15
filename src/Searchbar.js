// import React from "react";
// import { Text, View } from "react-native";
// import { SearchBar,Button } from "@rneui/base";
// import { useState } from "react";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, TextInput } from "react-native";
import axios from "axios";
import { SearchBar, Button } from "@rneui/base";
import Trending from "./Trending";
import { StatusBar } from "expo-status-bar";
// import Searchbar from "./src/Searchbar";

const Searchbar = () => {
  const [value, setValue] = useState("");
  return (
    <View className="" style={{}}>
      {/* <StatusBar></StatusBar> */}
      <SearchBar
        platform="default"
        onChangeText={(newVal) => setValue(newVal)}
        onClearText={() => console.log(onClearText())}
        placeholder="Search Movies..."
        placeholderTextColor="#888"
        round
        onCancel={() => console.log(onCancel())}
        value={value}
      />
    </View>
  );
};

export default Searchbar;
