import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 20,
    //marginBottom: 10,
    paddingLeft: 20,
    backgroundColor: theme.backgroundColors.night,
    display: 'flex',
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => console.log('Pressed!')}>
        <Text color="inverse" fontWeight="bold" fontSize="appbar">
          Repos
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AppBar;
