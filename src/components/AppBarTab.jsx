import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  navitem: {
    paddingRight: 20,
  },
});

const TabText = ({ label, ...props }) => {
  return (
    <Text color="inverse" fontWeight="bold" fontSize="appbar" {...props}>
      {label}
    </Text>
  );
};

const TabLink = ({ href, label, component, ...props }) => {
  return (
    <Link to={`/${href}`} activeOpacity={0.8} component={component} {...props}>
      <TabText label={label} />
    </Link>
  );
};

const AppBarTab = ({ label, href, onPress }) => {
  console.log(href);
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.navitem}>
        {href === undefined ? (
          <TabText label={label} />
        ) : (
          <TabLink label={label} href={href} component={TouchableWithoutFeedback} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;
