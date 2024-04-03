import { BarCodeScanner } from "expo-barcode-scanner";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Audio } from "expo-av";
import { COLORS } from "../../../shared/utils/constant";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { Routes } from "../../../shared/configuration/routes";

const WBarScanner = () => {
  const navigateHook = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const isFocused = useIsFocused();

  const callAudio = async () => {
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

    try {
      const { sound: playbackObject } = await Audio.Sound.createAsync(
        require("../../../shared/assets/sound/scanner_beep.mp3"),
        { shouldPlay: true },
      );
      // Reproducir el sonido
      await playbackObject.playAsync();
    } catch (error) {
      console.error("Error al cargar o reproducir el audio:", error);
    }
  };

  const askCameraPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    console.log(status);
    if (status === "granted") {
      setHasPermission(true);
    }
  };

  useEffect(() => {
    askCameraPermission();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    callAudio();
    const randomNumber = Math.floor(Math.random() * 105) + 1;

    // Concatenar el número aleatorio al tipo existente
    const newType = randomNumber;
    setTimeout(() => {
      navigateHook.navigate(Routes.Products, { type: newType, data });
    }, 400);
  };

  const startScan = () => {
    setScanned(false);
  };

  const renderCamera = () => {
    if (!isFocused) {
      return <View></View>;
    } else {
      return (
        <View style={styles.cameraContainer}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={styles.camera}
          />
          {scanned && (
            <TouchableOpacity
              style={[styles.button, { backgroundColor: COLORS.primaryOrange }]}
              onPress={() => setScanned(false)}
            >
              <Text style={styles.buttonText}>Iniciar escaneo</Text>
            </TouchableOpacity>
          )}
        </View>
      );
    }
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text> Por favor, dar permisos a la cámara</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return <Text> No hay acceso a la cámara</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escanear el código de barras</Text>
      <Text style={styles.paragraph}>
        Pulsa el botón para iniciar el escaneo.
      </Text>
      {renderCamera()}
    </View>
  );
};

export default WBarScanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 40,
  },
  cameraContainer: {
    width: "100%",
    aspectRatio: 1,
    overflow: "hidden",
    borderRadius: 30,
    marginBottom: 40,
  },
  camera: {
    flex: 1,
  },
  button: {
    backgroundColor: "blue",
    height: "13%",
    width: "60%",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    marginLeft: 70,
    marginRight: 70,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
