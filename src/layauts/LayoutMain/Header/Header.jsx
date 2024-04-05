import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'

const Header = ({ setActiveMenu }) => (
  <View style={styles.content}>
    <TouchableWithoutFeedback onPress={() => setActiveMenu(prev => !prev)}>
      <Image
        style={styles.iconImage}
        source={require('../../../assets/menu.png')}
      />
    </TouchableWithoutFeedback>
    <View style={styles.title}>
      <Text style={styles.titleText}>Test</Text>
    </View>
    <Image
      style={styles.iconImage}
      source={require('../../../assets/favicon.png')}
    />
  </View>
)

Header.propTypes = {
  setActiveMenu: PropTypes.func.isRequired
}

export default Header
