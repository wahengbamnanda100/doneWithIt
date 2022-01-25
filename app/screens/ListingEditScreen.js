import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import * as Yup from 'yup';

import {
  AppForm,
  AppFormFlied,
  AppFormPicker,
  SubmitButton,
} from '../components/forms';
import FormImagePicker from '../components/forms/FormImagePicker';
import useLocation from '../hooks/useLocation';
import routes from '../navigation/routes';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least one image.'),
});

const categories = [
  {backgroundColor: '#fc5c65', label: 'Furniture', value: 1},
  {backgroundColor: '#fd9644', label: 'Clothing', value: 2},
  {backgroundColor: '#26de81', label: 'Camera', value: 3},
];

function ListingEditScreen({navigation}) {
  const [data, setData] = useState({});
  const location = useLocation();

  return (
    <SafeAreaView style={styles.container}>
      {console.log('Post Data', data)}
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: [],
        }}
        onSubmit={values => {
          let _data = {...values, location};
          setData(_data);
          navigation.navigate('Listing', _data);
        }}
        validationSchema={validationSchema}>
        <FormImagePicker name="images" />
        <AppFormFlied maxlenght={255} name="title" placeholder="Title" />
        <AppFormFlied
          keyboardType="numeric"
          maxlenght={8}
          name="price"
          placeholder="Price"
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
        />
        <AppFormFlied
          maxlenght={255}
          multiline
          name="description"
          numberOfline={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
