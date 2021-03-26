import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Map, Modal, Panel, Input, List } from "./components";

export default function App() {
  const [puntos, setPuntos] = useState([]);
  const [puntosTemp, setPuntosTemp] = useState({});
  const [nombre, setNombre] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [visibilityFilter, setVisibilityFilter] = useState('new_puntos');

  const handleLongPress = ({ nativeEvent }) => {
setVisibilityFilter('new_puntos')
    setPuntosTemp( nativeEvent.coordinate);
    setVisibility(true)
  };
  const handleChangeText = (text) => {
    setNombre(text);
  };
  const handleSubmit = () => {
   const newPunto = {coordinate:puntosTemp, name: nombre}
   setPuntos(puntos.concat(newPunto))
   setVisibility(false)
   setNombre('')
  };
  const handleList = ()=>{
    setVisibilityFilter('all_puntos')
    setVisibility(true)
  }
  console.log(puntos);
  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} />
      <Panel onPressLeft={handleList} textLeft='Lista'/>
      <Modal visibility={visibility}>
        {visibilityFilter === 'new_puntos'
        ?
        <View style={styles.form}>
        <Input
          title="Nombre"
          placeholder="Nombre del Punto"
          onChangeText={handleChangeText}
        />
        <Button  title='Aceptar' onPress={handleSubmit}/>
        </View>
        :<List puntos={puntos} closeModal={() => setVisibility(false)}/>

      }
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  form:{
    padding:15
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
