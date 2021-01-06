import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useHistory } from 'react-router-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import theme from '../theme';
import useSignin from '../hooks/useSignin';
import BtnPrimary from './BtnPrimary';

const styles = StyleSheet.create({
  formView: {
    padding: 10,
    backgroundColor: theme.backgroundColors.white,
  },
});

export const SignInContainer = ({ handleSubmit }) => {
  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });

  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <View style={styles.formView}>
            <FormikTextInput name="username" placeholder="Username" testID="username" />
            <FormikTextInput
              name="password"
              placeholder="Password"
              secureTextEntry
              testID="password"
            />
            <BtnPrimary label="Sign in" onPress={handleSubmit} testID="signinBtn" />
          </View>
        )}
      </Formik>
    </View>
  );
};

const SignIn = () => {
  var history = useHistory();
  const [signIn] = useSignin();

  const handleSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      if (data && data.authorize && data.authorize.accessToken) {
        history.push('/');
      }
    } catch (e) {
      console.log('Sign in failed', e);
    }
  };

  return <SignInContainer handleSubmit={handleSubmit} />;
};

export default SignIn;
