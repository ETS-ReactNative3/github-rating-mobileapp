import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import NavItem from './NavItem';
import theme from '../theme';
import { ROUTE_SIGNIN } from '../Constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 20,
    paddingLeft: 20,
    backgroundColor: theme.backgroundColors.night,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <NavItem label="Repos" href="" />
      <NavItem label="Sign In" href={ROUTE_SIGNIN} />
    </View>
  );
};

export default AppBar;
