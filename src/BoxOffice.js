import { View, Text, Image, ScrollView, FlatList } from "react-native";
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
  const [img, setImg] = useState([]);
  const [movieObj, setMovieObj] = useState([]);
  const objMovie = [];

  const takeMovie = () => {
    const getData = async () => {
      try {
        const request = await axios.get("https://imdb-api.com/en/API/BoxOfficeAllTime/k_epjkd2kt");
        const response = request.data.items;
        const titleLoop = response.map(title => {
          return title.title
      })
      setData(titleLoop)
      // console.log(titleLoop)
        
        console.log("data title", data)
        // setData(response.title.map((i) => i.title));
      } catch (e) {
        console.log(e);
      }
    };
    getData();

    const image = data.map((item) => item.title);
    takeImg(data);
    setMovieObj({ title: data, image: img });
    objMovie.push({ title: data, image: img });
  };

  const takeImg = async (arr) => {
    // for (let x of arr) {
      const myResponse = await axios.get("https://www.omdbapi.com/?t=avatar&apikey=515aac75");
      // setImg(myResponse.data);
      // console.log(myResponse.data);
    // }
  };

  // takeImg("avatar");
  useEffect(() => {
    takeMovie();
  }, []);

  return (
    <View className="flex flex-column mt-2 items-center rounded" style={{ backgroundColor: "#3C4048", width: 320, height: 150 }}>
      {/* {console.log(objMovie)} */}
      {/* {console.log(img)} */}
      {/* {console.log(dataTitle)} */}
      {/* {console.log(img.data.Poster)} */}
      {/* {data.map((item, i) => {
        setimgData(item.title);
      })} */}
      {/* <ScrollView horizontal={true}>
        {data &&
          data.map((item, i) => {
            return (
              <View key={i} className="flex items-center justify-center  rounded-md mx-2 bg-black" style={{ width: 120 }}>
                <Image style={{ width: 100, height: 100 }} source={{ uri: item.image }} />
                <Text className="text-white text-center" style={{ fontFamily: "Inter-Medium" }}>
                  {item}
                </Text>
              </View>
            );
          })}
      </ScrollView> */}
      {/* <FlatList data={data} renderItem={renderItem} horizontal={true} ListFooterComponent={renderLoader} /> */}
    </View>
  );
};

const BoxOffice = () => {
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
        <Text className="text-2xl text-white pr-2" style={{ fontFamily: "Inter-Medium" }}>
          Box Office
        </Text>
        <Text>
          <AntDesign name="caretright" color={"white"} style={{ fontSize: 30 }} className="mr-6" />
        </Text>
      </View>
      <Cards />
    </View>
  );
};
export default BoxOffice;
