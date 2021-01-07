import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  reviewContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    padding: 10,
    backgroundColor: theme.backgroundColors.white,
  },
  reviewLeft: {
    flexGrow: 0,
    marginRight: 10,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewRight: {
    flexGrow: 1,
    flexShrink: 1, // text to not overflow component
  },
});

const cleanDate = (inputDate) => {
  if (!inputDate) return '';
  return new Date(inputDate).toLocaleDateString();
};

const ReviewItem = ({ review }) => {
  return (
    review && (
      <View style={styles.reviewContainer}>
        <View style={styles.reviewLeft}>
          <Text fontWeight="bold" color="primary">
            {review.rating}
          </Text>
        </View>
        <View style={styles.reviewRight}>
          <Text fontWeight="bold">
            {review.repository ? review.repository.fullName : review.user.username}
          </Text>
          <Text color="textSecondary">{cleanDate(review.createdAt)}</Text>
          <Text>{review.text}</Text>
        </View>
      </View>
    )
  );
};

export default ReviewItem;
