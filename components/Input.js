import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";


export default function App({ title, ...rest }) {
  return (
    <View style={styles.wrapper}>
      <Text>{title}</Text>
      <TextInput {...rest}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
   height:40
  },
});
