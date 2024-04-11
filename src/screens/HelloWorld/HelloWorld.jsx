import React from 'react'
import { Platform, Text } from 'react-native'
import styles from './styles'

const HelloWorld = () => (
  <>
    <Text style={styles.text}>
      {'\n\n\n\n\n'}
      ¡Hello World!
    </Text>
    <Text style={styles.text}>
      {'\n\n'}
      {Platform.OS.toUpperCase()}
    </Text>
  </>
)

export default HelloWorld
