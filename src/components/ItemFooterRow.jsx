import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  footerItem: {
    display: 'flex',
    alignItems: 'center',
  },
  mgBottom: {
    marginBottom: 5,
  },
});

const cleanAmount = (amount) => {
  return amount < 1000 ? amount : `${(amount / 1000).toFixed(1)} k`;
};

const ItemFooterRow = ({ label, amount }) => {
  return (
    <View style={styles.footerItem}>
      <Text fontWeight="bold" style={styles.mgBottom}>
        {cleanAmount(amount)}
      </Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  );
};

export default ItemFooterRow;
