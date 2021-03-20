import React from "react";
import { Dimensions, StyleSheet, Button, View, Text } from "react-native";

export default () => {
  return (
    <View style={styles.panel}>
      <Button title="Lista" />
      <Button title="Mostrar/Ocultar" />
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
      height: Dimensions.get("window").height - 150,
      width: Dimensions.get("window").width,
    },
    panel: {
        flex: 1,

    flexDirection: "row",
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
});
