import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import Text from './Text';
import BtnPrimary from './BtnPrimary';
import theme from '../theme';
import { useHistory } from 'react-router-native';
import useDeleteReview from '../hooks/deleteReview';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    padding: 10,
    backgroundColor: theme.backgroundColors.white,
  },
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
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    marginRight: 3,
    marginLeft: 3,
  },
});

const cleanDate = (inputDate) => {
  if (!inputDate) return '';
  return new Date(inputDate).toLocaleDateString();
};

const ButtonRow = ({ review, refetchReviews }) => {
  const history = useHistory();
  const [deleteReview] = useDeleteReview();

  const createAlert = (id) =>
    Alert.alert(
      'Are you sure?',
      'By pressing OK, the review will disappear for life.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'OK',
          onPress: () => {
            deleteReview({ id });
            refetchReviews();
          },
        },
      ],
      { cancelable: false }
    );

  return (
    <View style={styles.buttonRow}>
      <View style={styles.button}>
        <BtnPrimary
          label="Open repository"
          onPress={() => history.push(`/repo/${review.repository.id}`)}
          testID="openRepository"
        />
      </View>
      <View style={styles.button}>
        <BtnPrimary
          btnType="delete"
          label="Delete review"
          onPress={() => createAlert(review.id)}
          testID="deleteReview"
        />
      </View>
    </View>
  );
};

const ReviewItem = ({ review, refetchReviews }) => {
  return (
    review && (
      <View style={styles.wrapper}>
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
        {review.repository && <ButtonRow review={review} refetchReviews={refetchReviews} />}
      </View>
    )
  );
};

export default ReviewItem;
