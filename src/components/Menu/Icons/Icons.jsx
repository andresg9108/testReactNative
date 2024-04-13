import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'
import Icon from './Icon/Icon'

const Icons = ({ setActiveMenu }) => (
  <View style={styles.container}>
    <Icon
      onPress={() => setActiveMenu(false)}
      img={require('../../../assets/close.png')}
    />
  </View>
)

Icons.propTypes = {
  setActiveMenu: PropTypes.func.isRequired
}

export default Icons
