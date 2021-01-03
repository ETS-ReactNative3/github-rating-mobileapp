import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  formView: {
    padding: 10,
    backgroundColor: theme.backgroundColors.notselected,
  },
});

const LogInForm = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
