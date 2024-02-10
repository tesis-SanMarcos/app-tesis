import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../../shared/configuration/routes";
import WButon from "../../components/atoms/Buton/buton";
import WCommonHeader from "../../components/molecules/header";
import WCustomDrawer from "../../components/molecules/DrawerSection";

export default function Home() {
  const navigateHook = useNavigation();
  const [active, setActive] = useState(false);
  return (
    <View>
      <Text style={styles.title}>Bienvenido a la Bodega Lucy</Text>
      <Text style={styles.subtitle}>
        Controla y gestiona tu comercio de manera eficiente en esta plataforma
        virtual
      </Text>
      <WButon
        onPress={() => {
          navigateHook.navigate(Routes.Login);
        }}
      >
        Salir
      </WButon>
      <WButon
        onPress={() => {
          setActive(true);
        }}
      >
        custom
      </WButon>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    color: "#000",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "#000",
  },
});
