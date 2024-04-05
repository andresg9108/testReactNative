import React from 'react'
import PropTypes from 'prop-types'
import { Animated, StyleSheet } from 'react-native'
import styles from './styles'
import Items from './Items/Items'
import Icons from './Icons/Icons'

const Menu = ({ menuWidth, menuTranslateX, setActiveMenu, setPage }) => {
  const contentStyles = [
    styles.content,
    StyleSheet.create({
      width: menuWidth,
      transform: [
        {
          translateX: menuTranslateX
        }
      ]
    })
  ]

  return (
    <Animated.View style={contentStyles}>
      <Items />
      <Icons setActiveMenu={setActiveMenu} />
    </Animated.View>
  )
}

Menu.propTypes = {
  menuWidth: PropTypes.any.isRequired,
  menuTranslateX: PropTypes.any.isRequired,
  setActiveMenu: PropTypes.func.isRequired
}

export default Menu
