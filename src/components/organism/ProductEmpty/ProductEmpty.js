import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import PropTypes from "prop-types";
const WProductEmpty = ({message}) => {
  return (
    <View >
      <Text  testID="empty-message" style={{marginLeft:"22px",fontSize: 22}}>{message}</Text>
      <Image
        style={{ margin: 20, width: 300, height: 400 }}
        source={{
          uri: 'https://as1.ftcdn.net/v2/jpg/05/14/61/82/1000_F_514618293_GgvEoDKWmkXoPMIU7J83quovVGY1HsLa.jpg',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    marginLeft: 22,
    fontSize: 20,
  },
});
WProductEmpty.propTypes = {
    message: PropTypes.string.isRequired,
    }

export default WProductEmpty;
