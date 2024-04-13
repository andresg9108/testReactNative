import React from 'react'
import { View, TextInput, Button, Text } from 'react-native'
import styles from './styles'
import { Formik } from 'formik'
import Title from '../../components/Title/Title'
import FormikTextInput from '../../components/FormikTextInput/FormikTextInput'
import validationSchemaFormsFormik from '../../validationSchema/validationSchemaFormsFormik'

const FormsFormik = () => {
  const initialValues = {
    email: '',
    password: ''
  }

  return (
    <>
      <Text>{`\n\n\n\n`}</Text>
      <Title>Forms (Formik)</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaFormsFormik}
        onSubmit={values => console.log(values)}
      >
        {({ handleSubmit }) => (
          <View style={styles.form}>
            <FormikTextInput
              name="email"
              placeholder="E-mail"
              style={styles.textInput}
            />
            <FormikTextInput
              name="password"
              placeholder="Password"
              style={styles.textInput}
              secureTextEntry
            />
            <Button onPress={handleSubmit} title="Enviar" />
          </View>
        )}
      </Formik>
    </>
  )
}

export default FormsFormik
