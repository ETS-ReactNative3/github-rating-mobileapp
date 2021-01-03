import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
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
  },
  scrollviewStyles: {
    display: 'flex',
    flexDirection: 'row',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollviewStyles}>
        <NavItem label="Repositories" href="" />
        <NavItem label="Sign In" href={ROUTE_SIGNIN} />
      </ScrollView>
    </View>
  );
};

export default AppBar;
