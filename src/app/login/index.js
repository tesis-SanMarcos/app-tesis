import React, { useState } from "react";
import { StyleSheet, View, Text, Image, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../shared/utils/constant";
import WButon from "../../components/atoms/Buton/buton";
import { Routes } from "../../shared/configuration/routes";

export default function App() {
  const navigateHook = useNavigation();
  return (
    <LinearGradient
      style={styles.container}
      colors={[COLORS.primaryOrange, COLORS.secondaryOrange]}
    >
      <View style={{ flex: 1 }}>
        <View>
          <Image
            source={require("../../shared/assets/icons/cerdo.png")}
            style={styles.ImagePink}
          />
          <Image
            source={require("../../shared/assets/icons/card.png")}
            style={styles.ImageCard}
          />
          <Image
            source={require("../../shared/assets/icons/stadistic.png")}
            style={styles.ImageStadistic}
          />
          <Image
            source={require("../../shared/assets/icons/finance.png")}
            style={styles.ImageFinance}
          />
          <View
            style={{
              paddingHorizontal: 22,
              position: "absolute",
              top: 430,
              width: "100%",
            }}
          >
            <Text style={styles.title}>Bienvenido a la Bodega Lucy</Text>
            <Text style={styles.subtitle}>
              Controla y gestiona tu comercio de manera eficiente en esta
              plataforma virtual{" "}
            </Text>
            <WButon
              onPress={() => {
                navigateHook.navigate(Routes.Home);
              }}
            >
              Ingresar
            </WButon>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 45,
    fontWeight: "900",
    color: COLORS.white,
  },
  subtitle: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "400",
    color: "#1E1D16",
    marginVertical: 5,
  },
  ImagePink: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    top: 18,
    transform: [
      {
        translateX: 20,
      },
      {
        translateY: 50,
      },
      {
        rotate: "-15deg",
      },
    ],
  },
  ImageStadistic: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    top: 180,
    left: -40,
    transform: [
      {
        translateX: 50,
      },
      {
        translateY: 50,
      },
      {
        rotate: "15deg",
      },
    ],
  },
  ImageCard: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    top: -10,
    left: 100,
    transform: [
      {
        translateX: 50,
      },
      {
        translateY: 50,
      },
      {
        rotate: "-5deg",
      },
    ],
  },
  ImageFinance: {
    height: 200,
    width: 200,
    borderRadius: 20,
    position: "absolute",
    top: 110,
    left: 100,
    transform: [
      {
        translateX: 50,
      },
      {
        translateY: 50,
      },
      {
        rotate: "-5deg",
      },
    ],
  },
});
