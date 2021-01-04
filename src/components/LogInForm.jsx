import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
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

const LogInForm = () => {
  const [signIn] = useSignin();

  const initialValues = {
    username: '',
    password: '',
  };

  const handleSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      console.log(data);
    } catch (e) {
      console.log('Sign in failed');
    }
  };

  const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.formView}>
          <FormikTextInput name="username" placeholder="Username" />
          <FormikTextInput name="password" placeholder="Password" secureTextEntry />
          <TouchableWithoutFeedback onPress={handleSubmit}>
            <Text fontWeight="bold" color="inverse" style={theme.buttonStyle}>
              Sign in
            </Text>
          </TouchableWithoutFeedback>
        </View>
      )}
    </Formik>
  );
};

export default LogInForm;
