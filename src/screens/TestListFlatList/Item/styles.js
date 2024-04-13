import { StyleSheet } from 'react-native'
import { padding, fontSize, colorPalette } from '../../../mainStyles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginBottom: 20,
    padding: padding * 2,
    backgroundColor: colorPalette.color3
  },
  title: {
    color: colorPalette.textColor1,
    fontSize: fontSize + 8
  },
  description: {
    color: colorPalette.textColor1,
    fontSize: fontSize
  }
})

export default styles
