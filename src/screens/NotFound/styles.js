import { StyleSheet } from 'react-native'
import { font, fontSize, colorPalette } from '../../mainStyles.js'

const styles = StyleSheet.create({
  text: {
    fontFamily: font,
    fontSize: fontSize * 2.2,
    color: colorPalette.textColor1,
    textAlign: 'center'
  }
})

export default styles
