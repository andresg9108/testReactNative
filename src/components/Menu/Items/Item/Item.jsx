import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableNativeFeedback } from 'react-native'
import { Link, useLocation } from 'react-router-native'
import styles from './styles'

const Item = ({ name, path, setActiveMenu }) => {
  const { pathname } = useLocation()
  const itemStyles = [styles.item, pathname === path && styles.itemActive]

  return (
    <Link
      to={path}
      onPress={() => setActiveMenu(false)}
      component={TouchableNativeFeedback}
    >
      <Text style={itemStyles}>{name}</Text>
    </Link>
  )
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  setActiveMenu: PropTypes.func.isRequired
}

export default Item
