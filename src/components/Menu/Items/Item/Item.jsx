import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'

const Item = ({ name, path, setActiveMenu, setPage }) => {
  const itemClick = path => {
    setActiveMenu(false)
    setPage(path)
  }

  return (
    <TouchableWithoutFeedback onPress={() => itemClick(path)}>
      <Text style={styles.item}>{name}</Text>
    </TouchableWithoutFeedback>
  )
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  setActiveMenu: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired
}

export default Item
