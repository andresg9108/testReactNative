import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from './styles'

const Item = ({ name, description }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
)

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Item
