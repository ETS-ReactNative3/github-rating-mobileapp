import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  itemstyles: {
    backgroundColor: theme.backgroundColors.notselected,
  },
  activeItem: {
    backgroundColor: theme.backgroundColors.selected,
  },
});

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text color="primary" fontWeight="bold">
      Full name: {item.fullName}
    </Text>
    <Text>Description: {item.description}</Text>
    <Text>Language: {item.language}</Text>
    <Text>Stars: {item.stargazersCount}</Text>
    <Text>Forks: {item.forksCount}</Text>
    <Text>Reviews: {item.reviewCount}</Text>
    <Text>Ratings: {item.ratingAverage}</Text>
  </TouchableOpacity>
);

const RepositoryItem = ({ item, onPress, active }) => {
  return (
    <Item
      item={item}
      onPress={() => onPress(item.id)}
      style={[styles.itemstyles, active && styles.activeItem]}
    />
  );
};

export default RepositoryItem;
