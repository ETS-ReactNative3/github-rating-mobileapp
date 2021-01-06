import React from 'react';
import { StyleSheet, TouchableOpacity, Image, View, FlatList } from 'react-native';
import * as Linking from 'expo-linking';
import Text from './Text';
import theme from '../theme';
import ItemFooterRow from './ItemFooterRow';
import useRepository from '../hooks/useRepository';
import { useParams } from 'react-router-native';
import BtnPrimary from './BtnPrimary';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
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
    backgroundColor: theme.backgroundColors.white,
    marginBottom: 10,
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
    flexShrink: 1, // text to not overflow component
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

const RepositoryInfo = ({ item }) => {
  return (
    <View>
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
    </View>
  );
};

const RepositoryListItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item.id)}>
      <View style={styles.container}>
        <RepositoryInfo item={item} style={styles.itemstyles} />
      </View>
    </TouchableOpacity>
  );
};

export const SingleRepositoryItem = () => {
  let { id } = useParams();
  const { repository } = useRepository(id);

  const reviewNodes =
    repository && repository.reviews && repository.reviews.edges
      ? repository.reviews.edges.map((edge) => edge.node)
      : [];

  return (
    repository && (
      <>
        <FlatList
          data={reviewNodes}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          renderItem={({ item }) => <ReviewItem review={item} />}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => (
            <View style={[styles.container]}>
              <RepositoryInfo item={repository} />
              <BtnPrimary
                style={{ marginTop: 10 }}
                label="Open in GitHub"
                onPress={() => Linking.openURL(repository.url)}
                testID="openInGithubBtn"
              />
            </View>
          )}
        />
      </>
    )
  );
};

export default RepositoryListItem;
