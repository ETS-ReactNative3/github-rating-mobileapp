import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { ROUTE_SIGNIN, ROUTE_SIGNUP, ROUTE_CREATE_REVIEW } from '../Constants';
import useSignedInUser from '../hooks/useSignedInUser';
import AppBarTab from './AppBarTab';
import useSignOut from '../hooks/useSignOut';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 20,
    paddingLeft: 20,
    backgroundColor: theme.backgroundColors.night,
  },
  scrollviewStyles: {
    display: 'flex',
    flexDirection: 'row',
  },
});

const AppBar = () => {
  const { signedInUser } = useSignedInUser();
  const [signOut] = useSignOut();

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollviewStyles}>
        <AppBarTab label="Repositories" href="" />
        {signedInUser && signedInUser.authorizedUser !== null ? (
          <>
            <AppBarTab label="Create a review" href={ROUTE_CREATE_REVIEW} />
            <AppBarTab label="Sign out" onPress={async () => await signOut()} />
          </>
        ) : (
          <>
            <AppBarTab label="Sign in" href={ROUTE_SIGNIN} />
            <AppBarTab label="Sign up" href={ROUTE_SIGNUP} />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
