import React, { useState } from 'react';
import { FlatList } from 'react-native';
import RepositoryListItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useHistory } from 'react-router-native';
import OrderPicker from './OrderPicker';

export const RepositoryListContainer = ({ repositories, selectOrder, order }) => {
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
      ListHeaderComponent={() => <OrderPicker selectOrder={selectOrder} order={order} />}
    />
  );
};

const RepositoryList = () => {
  const [order, setOrder] = useState(null);
  const { repositories } = useRepositories(order);

  return (
    repositories && (
      <RepositoryListContainer
        repositories={repositories}
        selectOrder={(order) => setOrder(order)}
        order={order}
      />
    )
  );
};

export default RepositoryList;
