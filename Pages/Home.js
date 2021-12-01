import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { getDatabase, ref, onValue, set } from "firebase/database";

const Home = (props) => {
  return (
    <View>
      <Text style={{ textAlign: "center", fontSize: 30 }}>{props.count}</Text>
      <Button
        title="Click me to increment"
        onPress={() => props.addOne()}
      ></Button>
    </View>
  );
};

export default Home;
