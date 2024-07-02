import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { Button } from "react-native-paper";
import { COLORS } from "../../../shared/utils/colors/constant.js"
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
