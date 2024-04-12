import React from 'react'
import { View, TextInput, Button, Text } from 'react-native'
import styles from './styles'
import { Formik } from 'formik'
import Title from '../../components/Title/Title'

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
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View style={styles.form}>
            <TextInput
              placeholder="E-mail"
              value={values.email}
              onChangeText={handleChange('email')}
              style={styles.textInput}
            />
            <TextInput
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              style={styles.textInput}
            />
            <Button onPress={handleSubmit} title="Enviar" />
          </View>
        )}
      </Formik>
    </>
  )
}

export default FormsFormik
