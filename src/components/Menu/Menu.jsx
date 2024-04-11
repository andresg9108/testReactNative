import React from 'react'
import PropTypes from 'prop-types'
import { Animated, StyleSheet } from 'react-native'
import styles from './styles'
import Items from './Items/Items'
import Icons from './Icons/Icons'

const Menu = ({ routes, menuWidth, menuTranslateX, setActiveMenu }) => {
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
      <Items routes={routes} setActiveMenu={setActiveMenu} />
      <Icons setActiveMenu={setActiveMenu} />
    </Animated.View>
  )
}

Menu.propTypes = {
  routes: PropTypes.array.isRequired,
  menuWidth: PropTypes.any.isRequired,
  menuTranslateX: PropTypes.any.isRequired,
  setActiveMenu: PropTypes.func.isRequired
}

export default Menu
