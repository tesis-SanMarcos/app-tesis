import React, { useEffect, useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import WContainerCard from "../../components/hocs/container/containerHome";
import { Button, FAB, Title } from "react-native-paper";
import { globalStyles } from "../../shared/configuration/global-styles";
import WProduct from "../../components/molecules/Product";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS } from "../../shared/utils/constant";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Routes } from "../../shared/configuration/routes";
import dataProduct from "../../data/dataFake/products";
const Products = () => {
  const navigateHook = useNavigation();
  const route = useRoute();

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [remove, setRemove] = useState(0);
  const { type, data: scannedData } = route.params || {}; // scanner

  const handleRemoveCart = (productId) => {
    setRemove(false)
    let updatedCart = [...cart];
    let filteredCart = updatedCart.filter((prd) => prd.id !== productId);
    setCart(filteredCart);
    setRemove(true)
  };
  const updateQuantity = (productId, newQuantity = 0) => {
    console.log("🚀 ~ updateQuantity ~ productId:", productId);
    console.log("🚀 ~ updateQuantity ~ newQuantity:", newQuantity);
    setCart((prevCart) =>
      prevCart.map((product) => {
        console.log("🚀 ~ updateQuantity ~ product:", product.id, productId);
        return product.id === productId
          ? { ...product, productQuantity: parseFloat(newQuantity) }
          : product;
      }),
    );
  };

const handlePay = () => {
    setTimeout(() => {
        Alert.alert("Productos vendidos", `Precio Total : ${totalPrice}`);
        setCart([])
        navigateHook.navigate(Routes.Home)

    }, 1000);
};

  useEffect(() => {
    const filteredProducts = dataProduct.filter(
      (prd) => prd.code.toString() === scannedData,
    );
    console.log(scannedData);
    setCart((prevCart) => {
      const updatedCart = [
        ...prevCart,
        ...filteredProducts.map((product) => ({
          ...product,
          productQuantity: product.productQuantity || 1,
        })),
      ]; // Usar el estado quantity
      return updatedCart;
    });
  }, [type]);

  useEffect(() => {
    // Calcular el total de precios
    const result = cart.reduce((total, product) => {
      console.log(
        `Price: ${product.price}, Quantity: ${product.productQuantity}`,
      );
      return total + product.price * product.productQuantity; // Multiplicar el precio por la cantidad
    }, 0);
    setTotalPrice(result);
  }, [cart , remove]);

  const WProductEmpty = () => {
    return (
      <>
        <Title style={styles.paragraph}>No hay productos en el carrito </Title>
        <Image
          style={{ margin: "20 20 20 20 " }}
          width={300}
          height={400}
          source={{
            uri: "https://as1.ftcdn.net/v2/jpg/05/14/61/82/1000_F_514618293_GgvEoDKWmkXoPMIU7J83quovVGY1HsLa.jpg",
          }}
        />
      </>
    );
  };

  return (
    <>
      <WContainerCard>
        <ScrollView>
          {cart?.map((prd) => (
            <WProduct
              key={prd.item}
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
        {cart.length <= 0 ? (
          <WProductEmpty />
        ) : (
         <>
            <Button onPress={handlePay} textColor="white" style = {styles.buttonPrice} >CONFIRMAR VENTA</Button>
            <Text style = {styles.totalPrice}>Total: {totalPrice}</Text>
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
  boxPay : {
   display : "flex",
  },
  paragraph: {
    marginLeft: 20,
  },
  totalPrice : {
    fontSize : 20, 
    margin : 20,
    right : 0,
    fontWeight : "bold"
  },
  buttonPrice : {
    margin : 4 ,
    backgroundColor : COLORS.black , 
  }
});
