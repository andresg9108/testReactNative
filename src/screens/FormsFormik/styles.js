import { StyleSheet } from 'react-native'
import { font, fontSize, colorPalette } from '../../mainStyles.js'

const styles = StyleSheet.create({
  form: {
    margin: 12
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
    color: colorPalette.textColor1,
    fontFamily: font,
    fontSize: fontSize
  }
})

export default styles
