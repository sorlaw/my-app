// App.js
import React, { useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, TextInput } from "react-native";
// import { SearchBar, Button } from "@rneui/base";
import Trending from "./src/Trending";
import Searchbar from "./src/Searchbar";
import Populer from "./src/Populer";
import BoxOffice from "./src/BoxOffice";

function HomeScreen() {
  // const navigation = useNavigation();
  // const [name,setName] = useState('');
  return (
    <View className="" style={{ backgroundColor: "#3C4048" }}>
      <Searchbar />
      {/* <Trending /> */}
      {/* <Populer /> */}
      <BoxOffice />
    </View>
  );
}

function Detailfilm() {}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomePage" component={HomeScreen} />
        {/* <Stack.Screen name="Detail" component={Detailfilm} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default App;
export default App;
