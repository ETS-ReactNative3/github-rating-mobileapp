import React from 'react';
import { View, FlatList } from 'react-native';
import useMyReviews from '../hooks/useMyReviews';
import ReviewItem from './ReviewItem';

export const MyReviews = () => {
  const { reviews } = useMyReviews();
  const reviewNodes = reviews && reviews.edges ? reviews.edges.map((edge) => edge.node) : [];

  return (
    reviewNodes && (
      <FlatList
        data={reviewNodes}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={(item) => item.id}
      />
    )
  );
};

export default MyReviews;
