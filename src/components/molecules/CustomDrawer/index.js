import React from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Image, ImageBackground, View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { COLORS } from "../../../shared/utils/constant";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../../../shared/configuration/routes";
const WCustomDrawer = (props) => {
  const navigateHook = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: COLORS.white }}
      >
        <ImageBackground
          source={require("./../../../shared/assets/icons/background_orange2.jpg")}
          style={{ padding: 20 }}
        >
          <Image
            source={require("./../../../shared/assets/icons/User.jpeg")}
            style={{
              width: 70,
              height: 70,
              borderRadius: 100,
              marginBottom: 5,
            }}
          />
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "#feff" }}>
            Lucila Perez Mariscal
          </Text>
        </ImageBackground>
        <TouchableOpacity onPress={() => navigateHook.navigate(Routes.Home)}>
          <Text style={styles.itemList}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.itemList}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigateHook.navigate(Routes?.Products)}
        >
          <Text style={styles.itemList}>Productos</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.itemList}>Finanzas</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.itemList}>Inventariado</Text>
        </TouchableOpacity>
      </DrawerContentScrollView>
      <TouchableOpacity
        onPress={() => {
          navigateHook.navigate(Routes.Login);
        }}
      >
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
        >
          <Text style={styles.itemList}>Cerrar Sesión</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemList: {
    flex: 1,
    backgroundColor: "#fff",
    fontSize: 16,
    padding: 15,
    paddingLeft: 20,
    fontWeight: "600",
    color: COLORS.black,
  },
});

export default WCustomDrawer;
