import React from "react";
import { Dimensions } from "react-native";
import { FlatList, Text, View, Button, StyleSheet } from "react-native";

export default ({ puntos }) => {
  return (
    <>
      <View style={styles.list}>
        <FlatList
          data={puntos.map((x) => x.name)}
          renderItem={({ item }) => (
            <View style={styles.item}>
              {<Text>{item}</Text>}
            </View>
          )}
          keyExtractor={(item) => item}
        />
      </View>
      <View style={styles.button}>
        <Button title="Cerrar" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingBottom:    15
  },
  list: {
    height: Dimensions.get("window").height - 450,
    
  },
  item: {
    borderBottomWidth:1,
    borderColor: '#ccc',
    height:50,
    justifyContent: 'center',
    padding: 15,
  },
});
