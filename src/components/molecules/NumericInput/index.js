import React, { useEffect, useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-paper";
import { COLORS } from "../../../shared/utils/constant";
import { TouchableOpacity } from "react-native-gesture-handler";

const WNumInput = ({ value, onUpdateQuantity }) => {
  const plusAction = () => {
    const parsedInputValue = parseFloat(value);
    if (!isNaN(parsedInputValue)) {
      const newNumber = (parsedInputValue + 1).toString();
      onUpdateQuantity(newNumber);
    }
  };

  const minusAction = () => {
    const parsedInputValue = parseFloat(value);
    if (!isNaN(parsedInputValue)) {
      const newNumber = (parsedInputValue - 1).toString();
      onUpdateQuantity(newNumber);
    }
  };

  const disabled = value <= 1 ? true : false;
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Button
          disabled={disabled}
          onPress={minusAction}
          style={[styles.buttonLeft, disabled && styles.disabledButton]}
        >
          <Text style={styles.buttonAction}>-</Text>
        </Button>
      </TouchableOpacity>

      <TextInput
        onChangeText={(text) => handleUpdateQuantity(parseInt(text))}
        value={value}
        style={styles.input}
        keyboardType="numeric"
      />
      <TouchableOpacity>
        <Button onPress={plusAction} style={styles.buttonRight}>
          <Text style={styles.buttonAction}>+</Text>
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default WNumInput;

const styles = StyleSheet.create({
  buttonAction: {
    fontSize: 20,
    color: COLORS.white,
  },
  container: {
    marginRight: 25,
    borderBottomEndRadius: 10,
    color: COLORS.white,
    flex: 1,
    maxWidth: "70%",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  buttonLeft: {
    backgroundColor: COLORS.black,
    color: "white",
    borderTopEndRadius: 1,
    borderBottomRightRadius: 1,
  },
  buttonRight: {
    backgroundColor: COLORS.black,
    color: "white",
    borderTopLeftRadius: 1,
    borderBottomLeftRadius: 1,
  },
  disabledButton: {
    backgroundColor: "#DDDDDD",
  },
  input: {
    width: 55,
    fontSize: 20,
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 4,

    justifyContent: "center",
  },
});
