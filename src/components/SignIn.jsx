import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { useHistory } from 'react-router-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import Text from './Text';
import theme from '../theme';
import useSignin from '../hooks/useSignin';

const styles = StyleSheet.create({
  formView: {
    padding: 10,
    backgroundColor: theme.backgroundColors.notselected,
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
            <TouchableWithoutFeedback onPress={handleSubmit}>
              <Text fontWeight="bold" color="inverse" style={theme.buttonStyle} testID="signinBtn">
                Sign in
              </Text>
            </TouchableWithoutFeedback>
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
