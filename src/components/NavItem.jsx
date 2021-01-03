import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';

const NavItem = ({ label, href }) => {
  return (
    <TouchableWithoutFeedback onPress={() => console.log(label, href)}>
      <View>
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
