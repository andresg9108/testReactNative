import React from 'react'
import { Platform, Text } from 'react-native'
import LayoutMain from '../../layauts/LayoutMain/LayoutMain'
import styles from './styles'

const HelloWorld = () => (
  <LayoutMain>
    <Text style={styles.text}>
      {'\n\n\n\n\n'}
      ¡Hello World!
    </Text>
    <Text style={styles.text}>
      {'\n\n'}
      {Platform.OS.toUpperCase()}
    </Text>
  </LayoutMain>
)

export default HelloWorld
