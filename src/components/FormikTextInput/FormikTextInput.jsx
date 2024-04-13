import React from 'react'
import { TextInput, Text } from 'react-native'
import { useField } from 'formik'
import PropTypes from 'prop-types'

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)

  return (
    <>
      <TextInput
        {...props}
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
      />
      {meta.error && (
        <Text
          style={{ color: '#fff', backgroundColor: '#ff0000', fontSize: 15 }}
        >
          {meta.error}
        </Text>
      )}
    </>
  )
}

FormikTextInput.propTypes = {
  name: PropTypes.string.isRequired
}

export default FormikTextInput
