import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Touchable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import WContainerCard from "../../components/hocs/container/containerHome";
import { Card, FAB, Portal, Searchbar } from "react-native-paper";
import { COLORS } from "../../shared/utils/constant";
import { TouchableOpacity } from "react-native-gesture-handler";

import { globalStyles } from "../../shared/configuration/global-styles";
import Products from "../Products";
import { Routes } from "../../shared/configuration/routes";

export default function Home() {
  const routeHook = useRoute();
  useEffect(() => {
    const url = routeHook.name;
    console.log(url);
  }, []);

  const navigateHook = useNavigation();
  const [active, setActive] = useState(false);
  return (
    <>
      <WContainerCard>
        <Text style={styles.title}>Bienvenido a la Bodega Lucy</Text>
        <Text style={styles.subtitle}>Controla y gestiona tu comercio</Text>
        <Card style={styles.cardimg}>
          <TouchableOpacity>
            <Text style={styles.paragraph}>Finanzas</Text>
            <Card.Cover
              source={{
                uri: "https://finanzaspara.com/wp-content/uploads/2023/09/Que-son-las-finanzas-2.png",
              }}
            />
          </TouchableOpacity>
        </Card>
        <Card style={styles.cardimg}>
          <TouchableOpacity>
            <Text style={styles.paragraph}>Control de Inventario</Text>
            <Card.Cover
              source={{
                uri: "https://deterioroenlosmonumentoshistoricos.files.wordpress.com/2017/09/adsfhgaegh.jpg",
              }}
            />
          </TouchableOpacity>
        </Card>
      </WContainerCard>

      <FAB
        color="white"
        icon={{
          uri: "https://cdn-icons-png.flaticon.com/512/3396/3396176.png",
        }}
        style={globalStyles.fab}
        onPress={() => navigateHook.navigate(Routes.Products)}
      />
    </>
  );
}
const styles = StyleSheet.create({
  cardimg: {
    backgroundColor: "white",
    marginTop: 8,
  },
  container: {
    margin: 20,
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
    marginTop: 14,
    marginBottom: 8,
    color: "#000",
  },
  paragraph: {
    marginTop: 2,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
  },
});
