import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import "./firebase";
import Home from "./Pages/Home";
import { getDatabase, ref, onValue, set } from "firebase/database";

//storeHighScore(1, 5);
const Stack = createNativeStackNavigator();

export default function App() {
  const [count, setCount] = useState(0);
  function addOne() {
    const db = getDatabase();
    const reference = ref(db, "user");
    setCount(count + 1);
    set(reference, {
      count: count,
    });
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            title: "User Home Screen",
            headerTitleAlign: "center",
            headerShown: false,
          }}
        >
          {(props) => (
            <Home
              {...props}
              addOne={addOne}
              count={count}
              setCount={setCount}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
