import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { COLORS } from "../../../shared/utils/constant";
const WButon = forwardRef(({ children, ...restProps }, ref) => {
  return (
    <Button
      onPress
      mode="contained"
      style={{
        marginTop: 22,
        height: 42,
        backgroundColor: COLORS.black,
      }}
      labelStyle={{ fontSize: 19, color: COLORS.white }}
      ref={ref}
      {...restProps}
    >
      {children}
    </Button>
  );
});

WButon.defaultProps = {
  children: "Ingresar",
};

WButon.propTypes = {
  onPress: PropTypes.func,
  route: PropTypes.string,
  children: PropTypes.string,
  restProps: PropTypes.object,
};

export default WButon;
