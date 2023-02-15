import { View, Text, Button, Image, ScrollView, FlatList } from "react-native";
import { useFonts } from "expo-font";
import axios from "axios";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import AntDesign from "react-native-vector-icons/AntDesign";
import * as React from "react";
import { useState, useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const Cards = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      // const response = await axios.get("https://imdb-api.com/en/API/Top250Movies/k_87ryrmk1");
      setData(response.data.items);
    } catch (e) {
      console.log(e);
    }
  };

  const renderItem = ({ item }) => (
    <View className="flex items-center justify-center  rounded-md mx-2 bg-black" style={{ width: 120, overflow: "hidden" }}>
      <Image style={{ width: 128, height: 110 }} source={{ uri: item.image }} />
      <Text className="text-white text-center" style={{ fontFamily: "Inter-Medium" }}>
        {item.title}
      </Text>
    </View>
  );

  useEffect(() => {
    getData();
  }, []);

  return (
    <View className="flex flex-column mt-2 items-center rounded " style={{ backgroundColor: "#3C4048", width: 320, height: 150 }}>
      <FlatList data={data} renderItem={renderItem} horizontal={true} />
    </View>
  );
};

const Trending = () => {
  const [fontsLoaded] = useFonts({
    "Inter-Medium": require("../assets/fonts/Inter/static/Inter-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="p-5" onLayout={onLayoutRootView}>
      <View className="flex flex-row">
        <Text className="text-2xl text-white" style={{ fontFamily: "Inter-Medium" }}>
          Trending
        </Text>
        <Text>
          <AntDesign name="caretright" color={"white"} style={{ fontSize: 30 }} />
        </Text>
      </View>
      <Cards />
    </View>
  );
};
export default Trending;
