import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useHistory } from 'react-router-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import useSignin from '../hooks/useSignin';
import * as yup from 'yup';
import theme from '../theme';
import useSignUp from '../hooks/useSignUp';
import BtnPrimary from './BtnPrimary';

const styles = StyleSheet.create({
  formView: {
    padding: 10,
    backgroundColor: theme.backgroundColors.white,
  },
});

export const SignUpContainer = ({ handleSubmit }) => {
  const initialValues = {
    username: '',
    password: '',
    passwordConfirm: '',
  };

  const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().min(5).required('Password is required'),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Password confirmation is required'),
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
            <FormikTextInput
              name="passwordConfirm"
              placeholder="Password confirmation"
              secureTextEntry
              testID="passwordConfirm"
            />
            <BtnPrimary label="Sign up" onPress={handleSubmit} testID="SignUpBtn" />
          </View>
        )}
      </Formik>
    </View>
  );
};

const SignUp = () => {
  var history = useHistory();
  const [SignUp] = useSignUp();
  const [signIn] = useSignin();

  const handleSubmit = async (values) => {
    const { username, password, passwordConfirm } = values;
    try {
      const { data, errors } = await SignUp({ username, password, passwordConfirm });
      if (errors) throw errors;

      if (data && data.createUser) {
        const { data, errors } = await signIn({ username, password });
        if (errors) throw errors;

        if (data && data.authorize && data.authorize.accessToken) {
          history.push('/');
        }
      }
    } catch (e) {
      console.log('Sign up failed', e);
    }
  };

  return <SignUpContainer handleSubmit={handleSubmit} />;
};

export default SignUp;
