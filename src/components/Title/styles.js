import { fontSize, colorPalette } from '../../mainStyles.js'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    paddingVertical: 10
  },
  text: {
    color: colorPalette.textColor1,
    fontSize: fontSize * 2,
    fontWeight: 'bold'
  },
  textRed: {
    color: '#ff0000'
  },
  textBlue: {
    color: '#5555ff'
  }
})

export default styles
