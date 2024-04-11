import React from 'react'
import { Image, TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const Icon = ({ img, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <Image style={styles.icon} source={img} />
  </TouchableWithoutFeedback>
)

Icon.propTypes = {
  img: PropTypes.any.isRequired,
  onPress: PropTypes.func.isRequired
}

export default Icon
