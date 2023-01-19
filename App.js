import React, { useDebugValue, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);

  const onHandleChangeItem = (text) => {
    setTextItem(text);
  };

  const addItem = () => {
    setList((prevState) => [...prevState, textItem]);
    setTextItem("");
  };

  const renderItem = ({ item }) => (
    <View style={styles.renderItemStyle}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Agregar elementos a la lista</Text>
      </View>
      <View style={styles.listContainer}>
        <TextInput
          placeholder="Escribe aqui"
          style={styles.addItemInput}
          onChangeText={onHandleChangeItem}
          // value={""}
        />
        <Button title="Agregar" onPress={addItem} />
        <Text>Lista de elementos</Text>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: 40,
  },
  title: {
    // flex: 1,
    fontSize: 30,
    color: "blue",
  },
  listContainer: {
    flex: 1,
    backgroundColor: "red",
    width: "80%",
    marginBottom: 40,
  },
  renderItemStyle: {
    height: 60,
    flexDirection: "row",
    marginBottom: 25,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 3,
  },
});
