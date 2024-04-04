import Constants from 'expo-constants'
import { StyleSheet } from 'react-native'

export const padding = 10
export const fontSize = 15
export const colorPalette = {
  color1: '#000',
  color2: '#606060',
  color3: '#303030',
  textColor1: '#fff'
}

export const mainViewStyles = StyleSheet.create({
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  marginTop: Constants.statusBarHeight
})
