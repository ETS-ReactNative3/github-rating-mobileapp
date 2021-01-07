import React from 'react';
import { Route, Switch, Redirect } from 'react-router-native';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import { ROUTE_SIGNIN, ROUTE_SIGNUP, ROUTE_CREATE_REVIEW, ROUTE_MY_REVIEWS } from '../Constants';
import theme from '../theme';
import { SingleRepositoryItem } from './RepositoryItem';
import CreateReview from './CreateReview';
import SignUp from './SignUp';
import MyReviews from './MyReviews';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.backgroundColors.main,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route exact path="/">
          <RepositoryList />
        </Route>
        <Route path="/repo/:id">
          <SingleRepositoryItem />
        </Route>
        <Route path={`/${ROUTE_CREATE_REVIEW}`}>
          <CreateReview />
        </Route>
        <Route path={`/${ROUTE_MY_REVIEWS}`}>
          <MyReviews />
        </Route>
        <Route path={`/${ROUTE_SIGNIN}`}>
          <SignIn />
        </Route>
        <Route path={`/${ROUTE_SIGNUP}`}>
          <SignUp />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
