import React from 'react';
import { TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    textAlign: 'center',
    borderRadius: 7,
    borderWidth: 3,
    borderColor: theme.colors.primary,
    overflow: 'hidden', // otherwise the borderRadius doesnt apply for the bg color
  },
  delete: {
    backgroundColor: theme.colors.error,
    borderColor: theme.colors.error,
  },
});

const BtnPrimary = ({ style, label, onPress, btnType, ...props }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} {...props}>
      <Text
        fontWeight="bold"
        color="inverse"
        style={[style, styles.buttonStyle, btnType === 'delete' && styles.delete]}
        {...props}
      >
        {label}
      </Text>
    </TouchableWithoutFeedback>
  );
};
export default BtnPrimary;
