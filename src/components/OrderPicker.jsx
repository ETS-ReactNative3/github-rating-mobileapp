import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Chevron } from 'react-native-shapes';
import theme from '../theme';

const pickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: theme.colors.textPrimary,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: theme.colors.textPrimary,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  iconContainer: {
    top: 15,
    right: 20,
  },
  inputWeb: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: theme.colors.textPrimary,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

const styles = StyleSheet.create({
  headerComponent: {
    padding: 10,
  },
});

const OrderPicker = ({ selectOrder, order }) => {
  const labels = {
    default: 'Latest repositories',
    highestRated: 'Highest rated repositories',
    lowestRated: 'Lowest rated repositories',
  };

  const createItems = (values) => {
    var objList = [];
    for (var obj in values) {
      objList.push({ label: labels[values[obj]], value: values[obj] });
    }
    return objList;
  };
  return (
    <View style={styles.headerComponent}>
      {Platform.select({
        ios: (
          <RNPickerSelect
            onValueChange={(value) => selectOrder(value)}
            items={createItems(['default', 'highestRated', 'lowestRated'])}
            value={order ? order : 'default'}
            style={pickerStyles}
            Icon={() => <Chevron size={1.5} color="gray" />}
          />
        ),
        default: (
          <RNPickerSelect
            onValueChange={(value) => selectOrder(value)}
            items={createItems(['default', 'highestRated', 'lowestRated'])}
            value={order ? order : 'default'}
            style={pickerStyles}
          />
        ),
      })}
    </View>
  );
};

export default OrderPicker;
