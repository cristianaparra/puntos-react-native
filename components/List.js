import React from "react";
import { Dimensions } from "react-native";
import { FlatList, Text, View, Button, StyleSheet } from "react-native";

export default ({ puntos }) => {
  return (
    <>
      <View style={styles.list}>
        <FlatList
          data={puntos.map((x) => x.name)}
          renderItem={({ item }) => <Text> {item}</Text>}
          keyExtractor={(item) => item}
        />
      </View>
      <View>
          <Button title='Cerrar'/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
   height: Dimensions.get('window').height -450
  }
});
