import React, { useEffect, useMemo, useState } from "react";
import { Alert, StyleSheet, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, FAB } from "react-native-paper";
import { globalStyles } from "../../shared/configuration/global-styles";
import WContainerCard from "../../components/hocs/container/containerHome";
import WProduct from "../../components/molecules/Product";
import { Routes } from "../../shared/configuration/routes";
import { removeById } from "../../shared/utils/function";
import { calculateTotalPrice } from "./constant";
import { COLORS } from "../../shared/utils/colors/constant.js"
import { ScrollView } from "react-native-gesture-handler";
import { getAllProducts } from "../../data/Store/function";
import WProductEmpty from "../../components/organism/ProductEmpty/ProductEmpty";

const Products = () => {
  const navigateHook = useNavigation();
  const route = useRoute();
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [remove, setRemove] = useState(0);
  const { type, data: scannedData } = route.params || {}; // scanner

  const products = useMemo( async () => {
    try {
      let data = [];
      data = await getAllProducts();
      return data;
    } catch (e) {
      console.error("error al cargar la información");
    }
  }, []);
  
  const handleRemoveCart = (productId) => {
    console.log("🚀 ~ handleRemoveCart ~ productId:", productId);
    setRemove(false);
    let updatedCart = [...cart];
    let filteredCart = removeById(updatedCart, productId);
    setCart(filteredCart);
    setRemove(true);
  };
  const updateQuantity = (productId, newQuantity = 0) => {
    console.log("🚀 ~ updateQuantity ~ productId:", productId);
    console.log("🚀 ~ updateQuantity ~ newQuantity:", newQuantity);
    setCart((prevCart) =>
      prevCart.map((product) => {
        console.log("🚀 ~ updateQuantity ~ product:", product?.id, productId);
        return product.id === productId
          ? { ...product, productQuantity: parseFloat(newQuantity) }
          : product;
      }),
    );
  };

  const handlePay = () => {
    setTimeout(() => {
      Alert.alert("Productos vendidos", `Precio Total : ${totalPrice}`);
      setCart([]);
      navigateHook.navigate(Routes?.Home);
    }, 1000);
  };

  useEffect(() => {
    let initial_quantity_product = 1;
    const dataProducts = products ? products._j : [];
    console.log("🚀 ~ useEffect ~ products:", products)
    console.log("🚀 ~ useEffect ~ dataProducts:", dataProducts)
    if (Array.isArray(dataProducts)) {
      const filteredProducts = dataProducts.filter(
        (prd) => prd.code.toString() === scannedData,
      );
      console.log(scannedData);
      setCart((prevCart) => {
        const updatedCart = [
          ...prevCart,
          ...filteredProducts.map((product) => ({
            ...product,
            productQuantity:
              product?.productQuantity || initial_quantity_product,
          })),
        ]; // Usar el estado quantity
        return updatedCart;
      });
    } else {
      console.log("dataProducts no es un array:", dataProducts);
    }
  }, [type]);

  useEffect(() => {
    // Calcular el total de precios
    const result = calculateTotalPrice(cart);
    setTotalPrice(result);
  }, [cart, remove]);



  return (
    <>
      <WContainerCard>
        <ScrollView>
          {cart?.map((prd) => (
            <WProduct
              key={prd?.id}
              img={prd?.img}
              titleProduct={prd?.title}
              subtitle={prd?.slug}
              onRemove={() => handleRemoveCart(prd?.id)}
              price={prd?.price}
              onUpdateProductQuantity={(newQuantity) =>
                updateQuantity(prd?.id, newQuantity)
              }
            />
          ))}
        </ScrollView>
        {cart?.length <= 0 ? (
          <WProductEmpty message="No hay productos en el carrito"/>
        ) : (
          <>
            <Button
              onPress={handlePay}
              textColor="white"
              style={styles?.buttonPrice}
            >
              CONFIRMAR VENTA
            </Button>
            <Text style={styles?.totalPrice}>Total: {totalPrice}</Text>
          </>
        )}
      </WContainerCard>
      <FAB
        color="white"
        icon={{
          uri: "https://cdn-icons-png.flaticon.com/512/1550/1550324.png",
        }}
        style={globalStyles.fab}
        onPress={() => navigateHook.navigate(Routes.Scanner)}
      />
    </>
  );
};

export default Products;

const styles = StyleSheet.create({
  boxPay: {
    display: "flex",
  },
  paragraph: {
    marginLeft: 20,
  },
  totalPrice: {
    fontSize: 20,
    margin: 20,
    right: 0,
    fontWeight: "bold",
  },
  buttonPrice: {
    margin: 4,
    backgroundColor: COLORS.black,
  },
});
