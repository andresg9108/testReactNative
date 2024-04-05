import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableNativeFeedback } from 'react-native'
import { Link, useLocation } from 'react-router-native'
import styles from './styles'

const Item = ({ name, path }) => {
  const { pathname } = useLocation()
  const itemStyles = [styles.item, pathname === path && styles.itemActive]

  return (
    <Link to={path} component={TouchableNativeFeedback}>
      <Text style={itemStyles}>{name}</Text>
    </Link>
  )
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}

export default Item
