import { fontSize, padding, colorPalette } from '../../mainStyles.js'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  content: {
    width: '100%',
    backgroundColor: colorPalette.color2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    paddingVertical: padding,
    paddingHorizontal: padding
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: padding
  },
  titleText: {
    color: colorPalette.textColor1,
    fontSize: fontSize * 1.5
  },
  iconImage: {
    width: 48,
    height: 48
  }
})

export default styles
