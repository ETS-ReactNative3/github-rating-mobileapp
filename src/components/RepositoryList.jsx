import React, { useState } from 'react';
import { FlatList } from 'react-native';
import RepositoryListItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useHistory } from 'react-router-native';
import OrderPicker from './OrderPicker';
import { useDebounce } from 'use-debounce';

export const RepositoryListContainer = ({
  repositories,
  selectOrder,
  order,
  handleFilterChange,
  filter,
  onEndReach,
}) => {
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
      ListHeaderComponent={
        <OrderPicker
          selectOrder={selectOrder}
          order={order}
          handleFilterChange={handleFilterChange}
          filter={filter}
        />
      }
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

const RepositoryList = () => {
  const [order, setOrder] = useState(null);
  const [filter, setFilter] = useState('');
  const [searchKeyword] = useDebounce(filter, 500);
  const { repositories, fetchMore } = useRepositories({ order, searchKeyword, first: 15 });
  const onEndReach = () => fetchMore();

  const history = useHistory();
  return (
    repositories && (
      <RepositoryListContainer
        repositories={repositories}
        selectOrder={(order) => setOrder(order)}
        order={order}
        handleFilterChange={setFilter}
        filter={filter}
        onPress={(id) => history.push(`/repo/${id}`)}
        onEndReach={onEndReach}
      />
    )
  );
};

export default RepositoryList;
