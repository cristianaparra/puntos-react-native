import React from "react";
import { Dimensions, StyleSheet, Button, View, Text } from "react-native";

export default ({onPressLeft, textLeft}) => {
  return (
    <View style={styles.panel}>
      <Button title={textLeft} onPress={onPressLeft}/>
      <Button title="Mostrar/Ocultar" />
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
