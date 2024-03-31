import React from "react";
import { StyleSheet, View } from "react-native";

export default function WContainerCard({ children }) {
  return <View style={styles.container}>{children}</View>;
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF", // Color blanco
    borderRadius: 20, // Radio de los bordes
    padding: 10, // Espacio interno para los elementos hijos
    shadowColor: "#000000", // Color de la sombra
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Elevación para la sombra en Android
    marginLeft: 10,
    marginRight: 8,
    marginTop: 20,
    marginBottom: 115,
  },
});
