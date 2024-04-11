import React from 'react'
import { Text } from 'react-native'
import LayoutMain from '../../layauts/LayoutMain/LayoutMain'
import styles from './styles'

const NotFound = () => (
  <LayoutMain>
    <Text style={styles.text}>
      {'\n\n\n\n\n'}
      Extraviado
    </Text>
  </LayoutMain>
)

export default NotFound
