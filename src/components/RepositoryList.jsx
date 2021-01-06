import React, { useState } from 'react';
import { FlatList } from 'react-native';
import RepositoryListItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useHistory } from 'react-router-native';

export const RepositoryListContainer = ({ repositories }) => {
  const history = useHistory();
  const onPress = (id) => {
    history.push(`/repo/${id}`);
  };

  const repositoryNodes = repositories ? repositories.edges.map((edge) => edge.node) : [];

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={(item) => <RepositoryListItem item={item.item} onPress={onPress} />}
      keyExtractor={(item) => item.id}
    />
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return repositories && <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
