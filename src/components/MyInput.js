//Imports
import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

//Especificação do componente
const MyInput = (props) => {
  const { rotulo, valor, setText } = props;

  return (
    <View style={styles.grupo}>
      <Text style={styles.rotulo}>{rotulo}</Text>
      <TextInput
        keyboardType="default"
        style={styles.textInput}
        value={valor}
        onChangeText={setText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rotulo: {
    fontSize: "28px",
    color: "#FFFFFF",
    padding: 10
    //flexDirection: 'row'
  },

  textInput: {
    fontSize: "28px",
    borderWidth: 2,
    borderColor: "gray",
    width: "400px",
    backgroundColor: "#FFFFFF"
    //flexDirection: 'row'
  },

  grupo: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12
  }
});

//Export
export default MyInput;
