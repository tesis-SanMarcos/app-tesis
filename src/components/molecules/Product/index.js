import Reat from "react";
import { StyleSheet } from "react-native";

import { Button, Card, Text } from "react-native-paper";

const WProduct = () => {
  return (
    <Card style={styles.cardProduct}>
      <Card.Title
        title="Rellenitas de Coco"
        titleStyle={styles.title}
        subtitle="Galleta"
      />
      <Card.Cover
        height={2400}
        source={{
          uri: "https://munchpak.com/media/catalog/product/cache/04fcb38ef88b2143ed9aa346069c8a0e/g/a/galletas-coco.jpg",
        }}
      />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
};

export default WProduct;

const styles = StyleSheet.create({
  cardProduct: {
    marginTop : 8,
    backgroundColor: "white",
  },
  title: {
    fontWeight: "bold",
  },
});
