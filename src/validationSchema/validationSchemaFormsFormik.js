import * as yup from 'yup'

const validationSchemaFormsFormik = yup.object().shape({
  email: yup
    .string()
    .email('Debes agregar un email valido')
    .required('Debes agregar un email'),
  password: yup
    .string()
    .min(5, 'Contraseña muy corta')
    .max(1000, 'Contraseña muy larga')
    .required('Debes agregar una contraseña')
})

export default validationSchemaFormsFormik
