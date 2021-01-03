import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';

const styles = StyleSheet.create({
  navitem: {
    paddingRight: 20,
  },
});

const NavItem = ({ label, href }) => {
  return (
    <TouchableWithoutFeedback onPress={() => console.log(label, href)}>
      <View style={styles.navitem}>
        <Link to={`/${href}`} activeOpacity={0.8} component={TouchableWithoutFeedback}>
          <Text color="inverse" fontWeight="bold" fontSize="appbar">
            {label}
          </Text>
        </Link>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NavItem;
