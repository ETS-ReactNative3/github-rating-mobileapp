import React from 'react';
import { StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import Text from './Text';
import theme from '../theme';
import ItemFooterRow from './ItemFooterRow';

const styles = StyleSheet.create({
  itemstyles: {
    backgroundColor: theme.backgroundColors.notselected,
  },
  activeItem: {
    backgroundColor: theme.backgroundColors.selected,
  },
  picture: {
    width: 50,
    height: 50,
  },
  language: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 7,
    borderWidth: 3,
    borderColor: theme.colors.primary,
    overflow: 'hidden', // otherwise the borderRadius doesnt apply for the bg color
    color: theme.colors.inverse,
  },
  container: {
    display: 'flex',
    padding: 10,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 10,
  },
  titleLeft: {
    flexGrow: 0,
  },
  titleRight: {
    display: 'flex',
    flexGrow: 1,
    paddingLeft: 10,
    flexShrink: 1,
  },
  subtitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  mgBottom: {
    marginBottom: 5,
  },
});

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style, styles.container]}>
    <View style={styles.title}>
      <View style={styles.titleLeft}>
        <Image
          style={styles.picture}
          source={{
            uri: item.ownerAvatarUrl,
          }}
        />
      </View>
      <View style={styles.titleRight}>
        <Text color="primary" fontWeight="bold" style={styles.mgBottom}>
          {item.fullName}
        </Text>
        <Text style={styles.mgBottom}>{item.description}</Text>
        <Text style={styles.language}>{item.language}</Text>
      </View>
    </View>
    <View style={styles.subtitle}>
      <ItemFooterRow label="Stars" amount={item.stargazersCount} />
      <ItemFooterRow label="Forks" amount={item.forksCount} />
      <ItemFooterRow label="Reviews" amount={item.reviewCount} />
      <ItemFooterRow label="Ratings" amount={item.ratingAverage} />
    </View>
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
