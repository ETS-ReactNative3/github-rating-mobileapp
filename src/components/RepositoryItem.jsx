import React from 'react';
import { StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import * as Linking from 'expo-linking';
import Text from './Text';
import theme from '../theme';
import ItemFooterRow from './ItemFooterRow';
import useRepository from '../hooks/useRepository';
import { useParams } from 'react-router-native';
import BtnPrimary from './BtnPrimary';

const styles = StyleSheet.create({
  itemstyles: {
    backgroundColor: theme.backgroundColors.notselected,
  },
  activeItem: {
    //backgroundColor: theme.backgroundColors.selected,
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

const Item = ({ item, style }) => {
  return (
    <View style={[styles.item, style, styles.container]}>
      <View style={styles.title}>
        <View style={styles.titleLeft}>
          <Image
            style={styles.picture}
            source={{
              uri: item.ownerAvatarUrl,
            }}
            testID="picture"
          />
        </View>
        <View style={styles.titleRight}>
          <Text color="primary" fontWeight="bold" style={styles.mgBottom} testID="fullName">
            {item.fullName}
          </Text>
          <Text style={styles.mgBottom} testID="description">
            {item.description}
          </Text>
          <Text style={styles.language} testID="language">
            {item.language}
          </Text>
        </View>
      </View>
      <View style={styles.subtitle}>
        <ItemFooterRow label="Stars" amount={item.stargazersCount} />
        <ItemFooterRow label="Forks" amount={item.forksCount} />
        <ItemFooterRow label="Reviews" amount={item.reviewCount} />
        <ItemFooterRow label="Ratings" amount={item.ratingAverage} />
      </View>
      {item.url && (
        <BtnPrimary
          style={{ marginTop: 10 }}
          label="Open in GitHub"
          onPress={() => Linking.openURL(item.url)}
          testID="openInGithubBtn"
        />
      )}
    </View>
  );
};

const RepositoryItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item.id)}>
      <Item item={item} style={styles.itemstyles} />
    </TouchableOpacity>
  );
};

export const SingleRepositoryItem = () => {
  let { id } = useParams();
  const { repository } = useRepository(id);

  return repository && <Item item={repository} style={[styles.itemstyles, styles.activeItem]} />;
};

export default RepositoryItem;
