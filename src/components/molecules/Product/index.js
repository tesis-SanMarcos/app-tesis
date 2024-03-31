import Reat, { useState } from "react";
import PropTypes from "prop-types";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Button, Card } from "react-native-paper";
import { COLORS } from "../../../shared/utils/constant";
import WNumInput from "../NumericInput";

const WProduct = ({
  key,
  titleProduct,
  subtitle,
  img,
  onRemove,
  price,
  onUpdateProductQuantity,
}) => {
  const [quantity, setQuantity] = useState("1");

  const handleUpdateQuantity = (newQuantity) => {
    console.log(
      "🚀 ~ handleUpdateQuantity ~ handleUpdateQuantity:",
      newQuantity,
    );

    setQuantity(newQuantity);
    onUpdateProductQuantity(newQuantity); // Llamar a la función updateQuantity del padre con el ID del producto y la nueva cantidad
  };

  return (
    <Card key={key} style={styles.cardProduct}>
      <Card.Title
        title={titleProduct}
        titleStyle={styles.title}
        subtitle={subtitle}
        right={() => (
          <TouchableOpacity onPress={onRemove}>
            <Image
              style={{ width: 30, height: 30 }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3936/3936563.png",
              }}
            />
          </TouchableOpacity>
        )}
      />
      <Card.Cover
        style={{ backgroundColor: "white" }}
        source={{
          uri: img,
        }}
        resizeMode="contain"
      />

      <Card.Actions>
        <WNumInput value={quantity} onUpdateQuantity={handleUpdateQuantity} />
        <Text style={styles.spanPrice}>S/. {parseFloat(quantity) * price}</Text>
      </Card.Actions>
    </Card>
  );
};

export default WProduct;

WProduct.defaultProps = {
  titleProduct: "Rellenitas de Coco",
  subtitle: "Galleta",
  img: "https://munchpak.com/media/catalog/product/cache/04fcb38ef88b2143ed9aa346069c8a0e/g/a/galletas-coco.jpg",
  trashIcon: "https://cdn-icons-png.flaticon.com/512/3936/3936563.pnssg",
  price: 15.5,
};

WProduct.propTypes = {
  titleProduct: PropTypes.string,
  subtitle: PropTypes.string,
  img: PropTypes.string,
  trashIcon: PropTypes.string,
  price: PropTypes.number,
};

const styles = StyleSheet.create({
  cardProduct: {
    marginTop: 8,
    backgroundColor: "white",
  },
  title: {
    fontWeight: "bold",
  },
  buttonBox: {
    backgroundColor: COLORS.black,
  },
  spanPrice: {
    fontWeight: "bold",
    marginLeft: 10,
    marginRight: 25,
    fontSize: 18,
  },
});
