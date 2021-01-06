import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useHistory } from 'react-router-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import theme from '../theme';
import BtnPrimary from './BtnPrimary';
import useCreateReview from '../hooks/useCreateReview';

const styles = StyleSheet.create({
  formView: {
    padding: 10,
    backgroundColor: theme.backgroundColors.white,
  },
});

export const CreateReviewContainer = ({ handleSubmit }) => {
  const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: '',
  };

  const validationSchema = yup.object().shape({
    ownerName: yup.string().required('Repository owner name is required'),
    repositoryName: yup.string().required('Repository name is required'),
    rating: yup.number().min(0).max(100).required('Rating is required'),
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
            <FormikTextInput
              name="ownerName"
              placeholder="Repository owner name"
              testID="ownerName"
            />
            <FormikTextInput
              name="repositoryName"
              placeholder="Repository name"
              testID="repositoryName"
            />
            <FormikTextInput name="rating" placeholder="Rating between 0 and 100" testID="rating" />
            <FormikTextInput name="text" placeholder="Review" testID="text" multiline={true} />
            <BtnPrimary label="Create a review" onPress={handleSubmit} testID="reviewBtn" />
          </View>
        )}
      </Formik>
    </View>
  );
};

const CreateReview = () => {
  var history = useHistory();
  const [createReview] = useCreateReview();

  const handleSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;

    console.log(ownerName, repositoryName, rating, text);
    try {
      const { data, errors } = await createReview({ ownerName, repositoryName, rating, text });
      if (data && data.createReview) {
        history.push(`/repo/${data.createReview.repositoryId}`);
      }
      if (errors) throw errors;
    } catch (e) {
      console.log('Creating review failed', e);
    }
  };

  return <CreateReviewContainer handleSubmit={handleSubmit} />;
};

export default CreateReview;
