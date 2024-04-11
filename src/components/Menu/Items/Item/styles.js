import { StyleSheet } from 'react-native'
import { fontSize, colorPalette } from '../../../../mainStyles'

const styles = StyleSheet.create({
  item: {
    fontSize: fontSize + 5,
    color: colorPalette.textColor1,
    padding: 10
  },
  itemActive: {
    backgroundColor: colorPalette.color3
  }
})

export default styles
