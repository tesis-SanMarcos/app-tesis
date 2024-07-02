import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

// local storage
const setAllProducts = async (productLocal = []) => {
  const json_products = JSON.stringify(productLocal);
  try {
    await AsyncStorage.setItem("products", json_products);
    console.log("exitos al ingresar los productos");
  } catch (error) {
    console.error("error", error);
    Alert.alert("Error al guardar los productos");
  }
};

// elimianr local storage

const clearAllStore = async () => {
  try {
    await AsyncStorage.clear();
    console.log("eliminado con exito");
  } catch (error) {
    console.error("error", error);
    Alert.alert("Problemas con el store");
  }
};

const getAllProducts = async () => {
  try {
    const products = await AsyncStorage.getItem("products");
    if (products !== null) {
        const parsedProducts = JSON.parse(products);
        return parsedProducts;
    }
    return [];
  } catch (e) {
    console.error("error", error);
    Alert.alert("No se pudo extraer la información");
  }
};

export { setAllProducts, clearAllStore, getAllProducts };
