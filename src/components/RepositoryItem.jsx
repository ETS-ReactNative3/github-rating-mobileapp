import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  itemstyles: {
    backgroundColor: 'lightgray'
  },
  activeItem: {
    backgroundColor: 'gray'
  }
});

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text>Full name: {item.fullName}</Text>
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
      style={[styles.itemstyles, active && styles.activeItem ]}
    />
  );
};

export default RepositoryItem;