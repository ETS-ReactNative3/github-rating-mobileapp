import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    // backgroundColor: '#e1e5e8',
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const [selectedId, setSelectedId] = useState(null);
  const onPress = (id) => setSelectedId(id);

  const { repositories } = useRepositories();
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={(item) => (
        <RepositoryItem item={item.item} onPress={onPress} active={item.item.id === selectedId} />
      )}
      keyExtractor={(item) => item.id}
      extraData={selectedId}
    />
  );
};

export default RepositoryList;
